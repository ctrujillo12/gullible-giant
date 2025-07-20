let access_token: string | null = null;

export function setToken(token: string) {
  access_token = token;
}

export function getToken(): string | null {
  return access_token;
}
