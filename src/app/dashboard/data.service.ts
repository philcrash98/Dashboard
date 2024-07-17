import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

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

    return this.http.get(url, { headers }).pipe(
 // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
}
