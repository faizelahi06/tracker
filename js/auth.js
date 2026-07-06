import {verifier,unb64,b64} from './crypto.js';

// Authentication is intentionally isolated so it can later be replaced by backend auth.
// The plaintext password is not stored in source. This verifier corresponds to the configured portal password.
const AUTH_CONFIG = Object.freeze({
  salt: 'iafsml+24so8l3b8cy2mCg==',
  iterations: 210000,
  verifier: '/ZXBo/VKT1daB+R/yWFeSwGUR/mpDEHE6QDwSYQgqAc='
});

let config = null;

export async function initAuth() {
  if (!globalThis.crypto?.subtle) {
    throw new Error('Web Crypto API is unavailable. Use HTTPS or http://localhost.');
  }
  config = AUTH_CONFIG;
  return true;
}

export async function login(pass) {
  if (!config) await initAuth();
  const normalized = String(pass ?? '');
  const bits = await verifier(normalized, unb64(config.salt), config.iterations);
  const ok = timingSafe(b64(bits), config.verifier);
  if (ok) {
    sessionStorage.setItem('tracka.session', 'unlocked');
  }
  return ok;
}

function timingSafe(a,b) {
  if (a.length !== b.length) return false;
  let x = 0;
  for (let i=0; i<a.length; i++) x |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return x === 0;
}

export const isUnlocked = () => sessionStorage.getItem('tracka.session') === 'unlocked';
export const lock = () => sessionStorage.removeItem('tracka.session');
