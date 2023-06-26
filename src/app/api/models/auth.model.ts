export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  expirationEpochSeconds: number;
  token: string;
}

export enum UserRoleDto {
  admin = 'admin',
  user = 'user'
}

export interface UserAccountResponseDto {
  id: string;
  email: string;
  role: UserRoleDto;
  username: string;
}
