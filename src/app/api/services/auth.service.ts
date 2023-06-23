import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginRequestDto, LoginResponseDto } from '../models';
/**
 * TO MOCK A HTTP REQUEST
 */
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  // MOCK
  login(data: LoginRequestDto): Observable<LoginResponseDto> {
    console.log(data);
    return of({
      expirationEpochSeconds: Date.now() + 1000 * 86400,
      token:
        'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJVc2VybmFtZSI6IkZhYmlvIn0.GRULI1dlFxmx8geyjq_sCvuDHfBKHEnsZzuzmR8GAh0'
    }).pipe(delay(1000));
  }
}
