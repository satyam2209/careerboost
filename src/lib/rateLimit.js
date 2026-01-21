// Simple in-memory rate limiter (resets on server restart)
const rateLimitStore = new Map();

export function dailyLimit(identifier, maxRequests = 5) {
  const now = Date.now();
  const dayInMs = 24 * 60 * 60 * 1000;
  
  const key = `rate_limit_${identifier}`;
  const stored = rateLimitStore.get(key);
  
  if (!stored || (now - stored.timestamp) > dayInMs) {
    // Reset if no record or older than 24 hours
    rateLimitStore.set(key, {
      count: 1,
      timestamp: now
    });
    return { allowed: true, remaining: maxRequests - 1 };
  }
  
  if (stored.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }
  
  stored.count += 1;
  rateLimitStore.set(key, stored);
  
  return { allowed: true, remaining: maxRequests - stored.count };
}
