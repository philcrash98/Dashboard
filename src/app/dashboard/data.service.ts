import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://192.168.188.24/jdev/sps/io/APIControl/SET';

  constructor(private http: HttpClient) { }

  setminiserver(functionBlock: string, input: string, value: string): Observable<any> {

    const url = `${this.baseUrl}(${functionBlock};${input};${value})`;
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:DiEng2024')
    });

    return this.http.get(url, { headers });
  }
  
}
