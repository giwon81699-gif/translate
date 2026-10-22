import emailjs from '@emailjs/browser';
import { QuoteRequest } from '../types';

export interface EmailSendResult {
  success: boolean;
  isDemo?: boolean;
  error?: string;
  message?: string;
}

// Target recipient business email requested by user
export const TARGET_BUSINESS_EMAIL =
  import.meta.env.VITE_BUSINESS_EMAIL || 'contact@trixtranslate.com';

/**
 * Builds a structured, beautifully formatted plain-text email summary
 * suitable for inclusion in {{message}} or email bodies.
 */
export function formatFileSize(bytes: number): string {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }
  return `${(bytes / 1024).toFixed(1)} KB`;
}

/**
 * Builds a structured, beautifully formatted plain-text email summary
 * suitable for inclusion in {{message}} or email bodies.
 */
export function buildQuoteEmailBody(quote: QuoteRequest): string {
  const fileLines =
    quote.files && quote.files.length > 0
      ? quote.files
          .map((f, i) => `  ${i + 1}. [첨부파일] ${f.name} (${formatFileSize(f.size)} / ${f.type || '파일'})`)
          .join('\n')
      : '  - 직접 첨부파일 없음';

  const largeFileSection = quote.largeFileUrl?.trim()
    ? `\n  • 대용량 파일 다운로드/공유 링크: ${quote.largeFileUrl.trim()}`
    : '';

  return `========================================
[TRIX TRANSLATE] 신규 번역 견적 문의 접수
========================================

■ 견적 접수 번호: ${quote.id}
■ 접수 일시: ${new Date(quote.createdAt).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}

----------------------------------------
1. 고객 및 신청자 정보
----------------------------------------
• 성함 / 기업명 : ${quote.name}
• 연락처 (전화) : ${quote.contactNumber}
• 회신 이메일   : ${quote.email}

----------------------------------------
2. 번역 프로젝트 사양
----------------------------------------
• 원문 언어 (Source) : ${quote.sourceLanguage}
• 목표 언어 (Target) : ${quote.targetLanguage}
• 희망 납기일        : ${quote.preferredDeadline}
• 번역 분야 / 목적   : ${quote.translationPurpose}

----------------------------------------
3. 첨부 파일 및 다운로드 정보 (${quote.files?.length || 0}개)
----------------------------------------
${fileLines}${largeFileSection}
  ※ 웹사이트 상단 [신청 내역 조회]에서 접수번호 '${quote.id}'를 입력하시면 첨부파일 원본 열람/다운로드가 안전하게 가능합니다.

----------------------------------------
4. 세부 요청사항
----------------------------------------
${quote.projectDetails?.trim() ? quote.projectDetails.trim() : '(작성된 세부 요청사항 없음)'}

========================================
수신처: ${TARGET_BUSINESS_EMAIL}
개인정보 수집 동의 여부: ${quote.privacyAgreed ? '동의 완료 (ISO 17100 준수)' : '미동의'}
========================================`;
}

/**
 * Builds a clean, non-corrupted text & link summary for {{files_summary}} variable.
 */
export function buildFilesSummary(quote: QuoteRequest): string {
  const lines: string[] = [];

  if (quote.files && quote.files.length > 0) {
    quote.files.forEach((f, i) => {
      lines.push(`• [첨부 ${i + 1}] ${f.name} (${formatFileSize(f.size)})`);
    });
    lines.push(`  → 접수번호 [${quote.id}]로 사이트에서 원본 열람/다운로드 보관됨`);
  } else {
    lines.push('• 첨부파일: 없음');
  }

  if (quote.largeFileUrl && quote.largeFileUrl.trim()) {
    lines.push(`• [대용량 파일 다운로드 링크] ${quote.largeFileUrl.trim()}`);
  }

  return lines.join('\n');
}

/**
 * Sends the submitted quote request to the business email (contact@trixtranslate.com)
 * via EmailJS. If EmailJS environment variables are not yet configured,
 * it safely logs the submission and provides a demo fallback so that the submission
 * flow succeeds without throwing unhandled exceptions.
 */
export async function sendQuoteEmail(quote: QuoteRequest): Promise<EmailSendResult> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const filesSummary = buildFilesSummary(quote);
  const fullEmailBody = buildQuoteEmailBody(quote);

  // Template parameters for EmailJS
  // Users can bind these in their EmailJS template:
  // {{to_email}}, {{from_name}}, {{from_email}}, {{contact_number}},
  // {{quote_id}}, {{source_language}}, {{target_language}},
  // {{preferred_deadline}}, {{translation_purpose}}, {{files_summary}},
  // {{large_file_url}}, {{files_count}}, {{project_details}}, {{created_at}}, {{message}}
  const templateParams: Record<string, unknown> = {
    to_email: TARGET_BUSINESS_EMAIL,
    from_name: quote.name,
    from_email: quote.email,
    contact_number: quote.contactNumber,
    quote_id: quote.id,
    source_language: quote.sourceLanguage,
    target_language: quote.targetLanguage,
    preferred_deadline: quote.preferredDeadline,
    translation_purpose: quote.translationPurpose,
    files_summary: filesSummary,
    large_file_url: quote.largeFileUrl || '없음',
    files_count: quote.files?.length || 0,
    project_details: quote.projectDetails || '세부 요청사항 없음',
    created_at: new Date(quote.createdAt).toLocaleString('ko-KR'),
    message: fullEmailBody
  };

  // If EmailJS keys are provided, invoke the real EmailJS API
  if (serviceId && templateId && publicKey) {
    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey
      });

      console.log('✅ EmailJS 발송 성공:', response.status, response.text);
      return {
        success: true,
        isDemo: false,
        message: '견적 문의 내용이 사업용 이메일로 성공적으로 발송되었습니다.'
      };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error('❌ EmailJS 발송 실패:', errorMessage);
      return {
        success: false,
        isDemo: false,
        error: errorMessage,
        message: 'EmailJS 전송 중 오류가 발생했습니다.'
      };
    }
  }

  // Fallback / Demonstration mode when keys are not yet entered in .env
  console.info(
    `ℹ️ [EmailJS 가이드] VITE_EMAILJS_SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY가 설정되지 않았습니다.\n` +
      `실제 메일 발송을 위해 EmailJS(https://www.emailjs.com/) 계정의 키를 .env 파일에 등록해 주세요.\n` +
      `수신 예정 주소: ${TARGET_BUSINESS_EMAIL}\n` +
      `발송 내용 요약:\n`,
    templateParams
  );

  return {
    success: true,
    isDemo: true,
    message: `EmailJS 키 설정 대기 모드: 내용이 정상 접수되었으며, EmailJS 연동 시 ${TARGET_BUSINESS_EMAIL}로 실시간 발송됩니다.`
  };
}

/**
 * Generates a mailto: fallback link that the user or admin can click to
 * open their default email client with all details pre-filled to contact@trixtranslate.com
 */
export function createMailtoLink(quote: QuoteRequest): string {
  const subject = encodeURIComponent(`[TRIX 견적 문의] ${quote.name} 님의 번역 견적 신청 (${quote.id})`);
  const body = encodeURIComponent(buildQuoteEmailBody(quote));
  return `mailto:${TARGET_BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
}
