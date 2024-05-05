// cookieUtils.ts
import { cookies } from "next/headers";

// Função para salvar um cookie
export function setCookie(name: string, value: string, options?: { maxAge?: number, path?: string }) {
  cookies().set(name, value, options);
}

// Função para deletar um cookie
export function deleteCookie(name: string) {
  cookies().delete(name);
}

// Função para checar se um cookie existe
export function hasCookie(name: string) {
  return cookies().has(name);
}

// Função para pegar o valor de um cookie
export function getCookieValue(name: string) {
  const cookie = cookies().get(name);
  return cookie ? cookie.value : null;
}
