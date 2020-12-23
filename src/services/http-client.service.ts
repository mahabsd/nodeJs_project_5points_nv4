import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  usersUrl:string="/api/users";

  constructor(private http: HttpClient) { }
getAllUsers():Observable<Utilisateur[]>{
 return this.http.get<Utilisateur[]>(this.usersUrl);
}

}
