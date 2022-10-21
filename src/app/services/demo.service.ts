import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devAPI } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DemoService {

  arrDemo = ["Hello", "Hey", "Hi", "Bye"];
  constructor(private httpClient: HttpClient) { }

  createPost():Observable<any>{
    return this.httpClient.get(`${devAPI}posts`)
  }
}
