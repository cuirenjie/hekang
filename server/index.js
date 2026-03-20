import path from 'node:path';
import { fileURLToPath } from 'node:url';

import dotenv from 'dotenv';
import express from 'express';

import { sendBookingNotification } from './mailer.js';
import { validateBookingPayload } from './validation.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const rateLimitStore = new Map();

dotenv.config({ path: path.join(projectRoot, '.env.local') });
dotenv.config({ path: path.join(projectRoot, '.env') });

const app = express();

app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

function limitBookingRequests(req, res, next) {
  const clientKey = req.ip || 'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 8;
  const timestamps = (rateLimitStore.get(clientKey) ?? []).filter(
    (timestamp) => now - timestamp < windowMs,
  );

  if (timestamps.length >= maxRequests) {
    res.status(429).json({
      ok: false,
      error: '提交过于频繁，请稍后再试。',
    });
    return;
  }

  timestamps.push(now);
  rateLimitStore.set(clientKey, timestamps);
  next();
}

app.post('/api/bookings', limitBookingRequests, async (req, res) => {
  const result = validateBookingPayload(req.body);
  if (!result.ok) {
    res.status(400).json({
      ok: false,
      error: result.errors[0],
      errors: result.errors,
    });
    return;
  }

  try {
    const mailResult = await sendBookingNotification(result.data);
    res.json({
      ok: true,
      requestId: mailResult.requestId,
      envId: mailResult.envId,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to send booking email:', error.message);
    } else {
      console.error('Failed to send booking email:', error);
    }

    res.status(500).json({
      ok: false,
      error: '预约提交失败，请稍后再试。',
    });
  }
});

const port = Number(process.env.SERVER_PORT || '3001');
const isDirectRun =
  Boolean(process.argv[1]) &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectRun) {
  app.listen(port, () => {
    console.log(`Booking API server is running on http://127.0.0.1:${port}`);
  });
}

export { app };
