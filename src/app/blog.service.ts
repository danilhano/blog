import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable} from 'rxjs';
import { tap, catchError} from 'rxjs/operators';
import { PostInterface } from './interfaces/post.interface';

@Injectable()

export class BlogService {

  // Api que prover dados
  private _urlAPI: string = "https://jsonplaceholder.typicode.com/";

  constructor(private http:HttpClient) { }

  getPost(): Observable<PostInterface[]>{
    return this.http.get<PostInterface[]>(this._urlAPI + 'posts')
                    .pipe(tap(data => console.log(data)), catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Erro no Servidor" );
  }
}
