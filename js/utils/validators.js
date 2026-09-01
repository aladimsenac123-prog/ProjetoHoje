// js/utils/validators.js
export const emailRegex = /^[^
\s@]+@[^
\s@]+\.[^
\s@]+$/;

export function isNotEmpty(value) {
  if (value === null || value === undefined) return false;

  if (typeof value === 'string') {
    return value.trim().length > 0;
  }

  return String(value).trim().length > 0;
}

export function isValidEmail(value) {
  if (!isNotEmpty(value)) return false;
  return emailRegex.test(String(value).trim());
}

export function normalizePhoneBR(value) {
  if (!value) return '';

  return String(value)
    .replace(/\D/g, '')
    .replace(/^55/, '');
}

export function isValidPhoneBR(value) {
  const digits = normalizePhoneBR(value);

  if (!digits || digits.length < 10 || digits.length > 11) {
    return false;
  }

  const validPatterns = [
    /^\d{10}$/, // Fixo: DDD + 8 dígitos
    /^\d{11}$/  // Celular: DDD + 9 dígitos
  ];

  return validPatterns.some((pattern) => pattern.test(digits));
}

export default {
  emailRegex,
  isNotEmpty,
  isValidEmail,
  normalizePhoneBR,
  isValidPhoneBR,
};
