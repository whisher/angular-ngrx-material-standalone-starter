export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  expirationEpochSeconds: number;
  token: string;
}
