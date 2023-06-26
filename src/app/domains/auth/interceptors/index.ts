import { authStatusInterceptor } from './auth-status.interceptor';
import { authTokenInterceptor } from './auth-token.interceptor';

export const APP_AUTH_INTERCEPTORS = [authStatusInterceptor, authTokenInterceptor];
