import test from 'node:test';
import assert from 'node:assert/strict';

import { buildBookingNotification } from './booking-email.js';

test('buildBookingNotification creates a subject with customer name and booking date', () => {
  const result = buildBookingNotification(
    {
      name: '陈小玲',
      phonePrefix: '+852',
      phone: '6123 4567',
      date: '2026-03-25',
      service: '影像科',
      notes: '客户希望预约上午时段',
    },
    { submittedAt: new Date('2026-03-19T11:42:08Z') },
  );

  assert.equal(result.subject, '【官网预约】陈小玲 - 2026-03-25');
  assert.match(result.textBody, /客户姓名：陈小玲/);
  assert.match(result.textBody, /联系电话：\+852 6123 4567/);
  assert.match(result.textBody, /关注项目\/专科：影像科/);
});

test('buildBookingNotification fills optional values with readable fallbacks', () => {
  const result = buildBookingNotification(
    {
      name: '王先生',
      phonePrefix: '+86',
      phone: '13800138000',
      date: '',
      service: '',
      notes: '',
    },
    { submittedAt: new Date('2026-03-19T11:42:08Z') },
  );

  assert.equal(result.subject, '【官网预约】王先生 - 待确认日期');
  assert.match(result.textBody, /预约日期：待确认日期/);
  assert.match(result.textBody, /关注项目\/专科：待确认项目/);
  assert.match(result.textBody, /备注：无/);
  assert.match(result.textBody, /提交时间：2026-03-19 19:42:08/);
});
