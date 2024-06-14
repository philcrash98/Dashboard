import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json', {});
  }
  sendData(): Observable<any> {
    return this.http.get('admin:DiEng2024@192.168.188.24/jdev/sps/io/APIControl/SET(Lico;On;Pulse)');
  }
}
