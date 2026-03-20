import test from 'node:test';
import assert from 'node:assert/strict';

import { validateBookingPayload } from './validation.js';

test('validateBookingPayload trims values and returns normalized data', () => {
  const result = validateBookingPayload({
    name: '  陈小玲  ',
    phonePrefix: ' +852 ',
    phone: ' 6123 4567 ',
    date: '2026-03-25',
    service: ' 影像科 ',
    notes: '  客户希望预约上午时段  ',
  });

  assert.equal(result.ok, true);
  assert.deepEqual(result.data, {
    name: '陈小玲',
    phonePrefix: '+852',
    phone: '6123 4567',
    date: '2026-03-25',
    service: '影像科',
    notes: '客户希望预约上午时段',
  });
});

test('validateBookingPayload rejects requests without required fields', () => {
  const result = validateBookingPayload({
    name: '',
    phonePrefix: '+852',
    phone: '',
    date: '2026-03-25',
    service: '影像科',
    notes: '',
  });

  assert.equal(result.ok, false);
  assert.match(result.errors[0], /姓名/);
  assert.match(result.errors[1], /电话/);
});
