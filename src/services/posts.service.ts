import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostCreate, PostPreview } from 'src/model/posts.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseURL="https://dummyapi.io/data/v1";
  options={
    headers:new HttpHeaders().set('app-id','62bacf2347651a6eeffcf87b')}
  // paramMap: any;
  constructor(private http:HttpClient) { }



  getPostUserId(id:string):Observable<PostPreview[]>{
    return this.http.get<PostPreview[]>(`${this.baseURL}/user/${id}/post`,{...this.options});
  }

  deletePost(id:string):Observable<string>{
    return this.http.delete<string>(`${this.baseURL}/post/${id}/`,{...this.options})
  }

  updatePost(id: string, body: any):Observable<PostPreview>{
    return this.http.put<PostPreview>(`${this.baseURL}/post/${id}`,body,{...this.options})
  }
  createpost(payload:PostCreate):Observable<PostPreview>{
    return this.http.post<PostPreview>(`${this.baseURL}/post/`+'create', {...payload},{...this.options} )
  }

  
}
