import { Injectable } from '@angular/core';

@Injectable()

export class BlogService {

  // Api que prover dados
  private _urlAPI: string = "https://jsonplaceholder.typicode.com/";

  constructor() { }

}
