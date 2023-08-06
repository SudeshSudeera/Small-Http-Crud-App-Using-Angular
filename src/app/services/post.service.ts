import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Post from '../dto/Post';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl='https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient, private fireStoreService:AngularFirestore) {

  }

  findAllDataFireStore(){
    return this.fireStoreService.collection('post-data').snapshotChanges();
  }

  /* findAll():Observable<any>{
    return this.http.get<any>(this.baseUrl+'posts');
  } */

  deleteDataFireStore(id:any){
    return this.fireStoreService.collection('post-data').doc(id).delete();
  }

  /* delete(id:any):Observable<any>{
    return this.http.delete<any>(this.baseUrl+'posts/'+id);
  } */

  findDataFireStore(id:any){
    return this.fireStoreService.collection('post-data').doc(id).valueChanges();
  }

  /* find(id:any):Observable<any>{
    return this.http.get<any>(this.baseUrl+'posts?id='+id);
  } */

  // createDataFireStore(post:Post){
  //   return new Promise<any>((resolve,reject) => {
  //     this.fireStoreService.collection('post-data')
  //   .add(post)
  //   .then((response) => {
  //     console.log(response);
  //   }, (error) => {
  //     console.log(error)
  //   });
  // });
  // }

  createDataFireStore(post: Post) {
    console.log(post);
    const postData = post.toObject();
    return new Promise<any>((resolve, reject) => {
      this.fireStoreService.collection('post-data')
        .add(postData)
        .then(response => {
          console.log(response);
        }, error => {
          console.log(error)
        });
    });
  }


  /* create(id:any, userId:any, title:any, body:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+'posts',{
      id, userId, title, body
    });
  } */

  updateDataFireStore(post:Post){
    return this.fireStoreService.collection('post-data')
    .doc(post.id)
    .update({
      userId:post.userId,
      title:post.title,
      body:post.body
    });
  }

  /* update(id:any, userId:any, title:any, body:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+'posts/'+id,{
      id, userId, title, body
    });
  } */


}
