import { env } from "~/env";
import crypto from 'crypto';

export function generateWebhookUrl(userId: string, blogId: string): string {
  const webhookPath = `/api/webhooks/hashnode/${userId}/${blogId}`;
  // In production, use your actual domain
  return `${env.NEXT_PUBLIC_BASE_URL}/${webhookPath}`;
}

// Verify webhook signature from Hashnode
export function verifyHashnodeWebhook(
  payload: string,
  signature: string,
  webhookSecret: string
): boolean {
  const hmac = crypto.createHmac('sha256', webhookSecret);
  const digest = hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}