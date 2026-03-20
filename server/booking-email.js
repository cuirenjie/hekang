const SHANGHAI_TIMEZONE = 'Asia/Shanghai';

function normalizeLineBreaks(value) {
  return String(value ?? '').replace(/\r\n?/g, '\n');
}

function sanitizeSingleLine(value) {
  return normalizeLineBreaks(value).replace(/\s+/g, ' ').trim();
}

function sanitizeMultiLine(value) {
  return normalizeLineBreaks(value)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n')
    .trim();
}

function formatDateTime(date) {
  const formatter = new Intl.DateTimeFormat('sv-SE', {
    timeZone: SHANGHAI_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return formatter.format(date);
}

export function buildBookingNotification(booking, options = {}) {
  const submittedAt = options.submittedAt ?? new Date();
  const name = sanitizeSingleLine(booking.name) || '未填写姓名';
  const phonePrefix = sanitizeSingleLine(booking.phonePrefix);
  const phone = sanitizeSingleLine(booking.phone);
  const fullPhone = [phonePrefix, phone].filter(Boolean).join(' ') || '未填写';
  const bookingDate = sanitizeSingleLine(booking.date) || '待确认日期';
  const service = sanitizeSingleLine(booking.service) || '待确认项目';
  const notes = sanitizeMultiLine(booking.notes) || '无';

  return {
    subject: `【官网预约】${name} - ${bookingDate}`,
    textBody: [
      '客服您好，',
      '',
      '官网收到一条新的预约申请，信息如下：',
      '',
      `客户姓名：${name}`,
      `联系电话：${fullPhone}`,
      `预约日期：${bookingDate}`,
      `关注项目/专科：${service}`,
      `备注：${notes}`,
      `提交时间：${formatDateTime(submittedAt)}`,
      '',
      '请及时跟进客户并确认预约安排。',
      '',
      '本邮件由官网预约系统自动发送。',
    ].join('\n'),
  };
}
