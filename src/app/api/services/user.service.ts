// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
/**
 * TO MOCK A HTTP REQUEST
 */
import { delay } from 'rxjs/operators';

// Models
import { UserAccountResponseDto, UserRoleDto } from '../models';

const mockData: UserAccountResponseDto = {
  id: 'abc',
  email: 'io@io.io',
  role: UserRoleDto.admin,
  username: 'Whisher'
};

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  account(): Observable<UserAccountResponseDto> {
    return of(mockData).pipe(delay(1000));
  }

  pokemonTest(): Observable<unknown> {
    const url = 'https://pokeapi.co/api/v2/ability/1';
    return this.http.get<unknown>(url);
  }
}
