import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from "rxjs";


@Injectable({
    providedIn: 'root'
  })
  export class FakeService{

    URL : String = "http://localhost:3000/";

      constructor(private httpClient: HttpClient){
      }

      getSomething(id: Number){
          
      }

  }