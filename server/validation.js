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

function withinLimit(value, maxLength) {
  return value.length <= maxLength;
}

export function validateBookingPayload(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return {
      ok: false,
      errors: ['请求数据格式不正确。'],
    };
  }

  const data = {
    name: sanitizeSingleLine(input.name),
    phonePrefix: sanitizeSingleLine(input.phonePrefix) || '+852',
    phone: sanitizeSingleLine(input.phone),
    date: sanitizeSingleLine(input.date),
    service: sanitizeSingleLine(input.service),
    notes: sanitizeMultiLine(input.notes),
  };

  const errors = [];

  if (!data.name) {
    errors.push('请输入姓名。');
  } else if (!withinLimit(data.name, 80)) {
    errors.push('姓名长度不能超过 80 个字符。');
  }

  if (!data.phone) {
    errors.push('请输入联系电话。');
  } else if (!withinLimit(data.phone, 40)) {
    errors.push('电话长度不能超过 40 个字符。');
  }

  if (!withinLimit(data.phonePrefix, 10)) {
    errors.push('区号格式不正确。');
  }

  if (data.date && !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
    errors.push('预约日期格式不正确。');
  }

  if (!withinLimit(data.service, 80)) {
    errors.push('关注项目长度不能超过 80 个字符。');
  }

  if (!withinLimit(data.notes, 2000)) {
    errors.push('备注长度不能超过 2000 个字符。');
  }

  if (errors.length > 0) {
    return {
      ok: false,
      errors,
    };
  }

  return {
    ok: true,
    data,
  };
}
