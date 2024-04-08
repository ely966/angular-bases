import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Bic } from '../interfaces/bic.interface';
import { DataReceived } from '../interfaces/dataReceived.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiHubService {
  private url = 'https://api.apyhub.com/validate/bic';

  constructor(private httpClient: HttpClient) {}
  /*Enviar el bic a la api apiHubService*/
  sendRequest(bicSend: Bic): Observable<DataReceived> {
    return this.httpClient.post<DataReceived>(this.url, bicSend).pipe(
      tap((bicReceived) => {
        console.log(bicReceived);
      })
    );
  }
}
