import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CreateUserModel, UserFull, UserPreview } from 'src/model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  baseURL="https://dummyapi.io/data/v1";
  options={
    headers:new HttpHeaders().set('app-id','62bacf2347651a6eeffcf87b')}
    //  headers=new HttpHeaders({
    //   'content-type':'application/json',
    //   'app-id':'62b95c65cd3e5a36077b2aae'

    // })

  

  constructor(private http:HttpClient) { }

  getListUsers():Observable<UserPreview[]>{
    return this.http.get<UserPreview[]>(`${this.baseURL}/user?limit=100`,{...this.options} )
    // .map((res:Response) => res.json().data)
   
  

  }

  getUsersId(id:string):Observable<UserFull>{
    return this.http.get<UserFull>(`${this.baseURL}/user/${id}`,{...this.options});
  }



  

  createUser(payload: CreateUserModel):Observable<UserPreview[]>{
    return this.http.post<UserPreview[]>(`${this.baseURL}/user/create`,payload,this.options )
  }

  


  deleteUser(id:string):Observable<string>{
    return this.http.delete<string>(`${this.baseURL}/user/`+id,{...this.options})
  }


  updateUser(id: string, body: any):Observable<UserPreview[]>{
    return this.http.put<UserPreview[]>(`${this.baseURL}/user/`+id,body,{...this.options})
  }
//   handleError(error: HttpErrorResponse): Observable<never> {
//     console.log('Inside handleError():', error);
//     return throwError('some error occurred');
// }

}
