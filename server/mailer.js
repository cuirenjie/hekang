import DmModule from '@alicloud/dm20151123';
import { Config } from '@alicloud/openapi-client';

import { buildBookingNotification } from './booking-email.js';

const DmClient = DmModule.default;
const { SingleSendMailRequest } = DmModule;

let dmClient;

function requireEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} is not configured.`);
  }
  return value;
}

function readBoolean(name, defaultValue) {
  const value = process.env[name]?.trim().toLowerCase();
  if (!value) {
    return defaultValue;
  }

  return !['0', 'false', 'no', 'off'].includes(value);
}

function readNumber(name, defaultValue) {
  const raw = process.env[name]?.trim();
  if (!raw) {
    return defaultValue;
  }

  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : defaultValue;
}

function createDmClient() {
  if (dmClient) {
    return dmClient;
  }

  dmClient = new DmClient(
    new Config({
      accessKeyId: requireEnv('ALIBABA_CLOUD_ACCESS_KEY_ID'),
      accessKeySecret: requireEnv('ALIBABA_CLOUD_ACCESS_KEY_SECRET'),
      endpoint: process.env.DM_ENDPOINT?.trim() || 'dm.aliyuncs.com',
    }),
  );

  return dmClient;
}

export async function sendBookingNotification(booking) {
  const client = createDmClient();
  const { subject, textBody } = buildBookingNotification(booking);
  const request = new SingleSendMailRequest({
    accountName: requireEnv('DM_ACCOUNT_NAME'),
    addressType: readNumber('DM_ADDRESS_TYPE', 0),
    replyToAddress: readBoolean('DM_REPLY_TO_ADDRESS', true),
    toAddress: requireEnv('DM_TO_ADDRESS'),
    fromAlias: process.env.DM_FROM_ALIAS?.trim() || '客服',
    subject,
    textBody,
  });

  const response = await client.singleSendMail(request);

  return {
    subject,
    requestId: response.body?.requestId ?? '',
    envId: response.body?.envId ?? '',
  };
}
