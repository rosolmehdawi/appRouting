import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostsService } from 'src/services/posts.service';
import{Post,PostCreate,PostPreview} from 'src/model/posts.model';
import { discardPeriodicTasks } from '@angular/core/testing';
 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
postId:any=[];
posts:any=[];
users:any=[];
// newpost:any={'text':"new text",'owner':'rosol','likes':3,'image':'sgdgdg','tags':['aurora','earth','space']};
newpost:PostCreate={'text':"new text",'owner':'rosol','likes':3,'image':'https://img.dummyapi.io/photo-1533532143364-dad106cadddc.jpg','tags':['aurora','earth','space']};
createUSER:any=[];
userId:any=[];
counter=0;
  location: any;
  constructor(private postsService:PostsService,private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  
    this.getPost();
    
  }
  getPost(){
    this.activatedRoute.queryParamMap.subscribe((params)=>{
      

      this.postId=params.get('id') || '';
      console.log(this.postId )
     this.postsService.getPostUserId(this.postId).subscribe((response:any)=>{
       this.posts=response.data;
       console.log(this.posts)
     

     })
      
 
      
     })
   }

   deleteOfPost(id:string):void{
   this.postsService.deletePost(id).subscribe((response:any)=>this.ngOnInit());

  }

  updatePostId(userUpdate:PostPreview):void{
  this.postsService.updatePost(userUpdate.id, { 
    text: 'new text',

    likes:10000000,
    image:"https://www.mckinsey.com/~/media/mckinsey/industries/aerospace%20and%20defense/our%20insights/the%20role%20of%20space%20in%20driving%20sustainability%20security%20and%20development%20on%20earth/the%20role%20of%20space%20in%20driving%20sustainability%20security%20and%20development%20on%20earth1345595606thumb1536x1536.jpg?mw=677&car=42:25"})
    .subscribe(() =>this.ngOnInit())
}

// AddPost(post:PostCreate):void{
//   this.postsService.createpost(post.data,{'text':"new text",'owner':'rosol','likes':3,'image':'https://img.dummyapi.io/photo-1533532143364-dad106cadddc.jpg','tags':['aurora','earth','space']}).subscribe((respnse:any)=>{
//     console.log(respnse);
//    post=respnse;
//     this.posts.push(post)
 
//   })

  


//   console.log('added')

// }
AddPost(id:string): void {
  this.activatedRoute.queryParamMap.subscribe((params)=>{
    this.postId=params.get('id') || '';
    this.postsService.createpost({

      text:'new text',
  
      image: 'https://pbs.twimg.com/media/FBNdDlmXEAsJkRV.jpg',
     likes: 2000000000000,
  
  tags:["aurora",'space'],
  
      
      owner: `${this.postId}`
    })
    .subscribe(
        (response) =>{ console.log(response);
        this.posts.push(response);}
     
    );
    console.log(this.postId)
      
   } )}
  
// console.log(id)

back(id:string):void{
 
  // this.router.navigate(['user-details'],{state:{data:this.getId}} );
  this.router.navigate([`/users/users-list/user-details`] ,{queryParams:{id:this.postId}}) ;
  // users:this.getId(id)
}

}