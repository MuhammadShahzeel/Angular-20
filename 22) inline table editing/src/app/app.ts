import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  // no extra imports required here
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
onSave(post: any) {
  if(post.title =="" || post.body =="" || post.userId ==""){
    alert("Please enter all the fields");
    
  }
  else{
 console.log(post);
 // you can pass the data  to api 
  }
}
onEdit(record: any) {
  this.removeEditable();
  record.isEditable = true;
}
addNew() {
  this.removeEditable();
  const newObj = {

    userId: '',
    id: 0,
    title: '',
    body: '',
    isEditable: true
  };
  this.postList.unshift(newObj);
}

removeEditable(){
  this.postList.forEach(post => {
    post.isEditable = false;
  });
}

cancelRow(item: any) {
  if (item.id == 0) {
    this.postList.splice(0, 1);
  
  }
  item.isEditable = false;
}
  protected readonly title = signal('first_app');
  http = inject(HttpClient);

  ngOnInit() :void {

    this.getAllPosts();
  }
  postList: any[] = [];
  getAllPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res: any) => {
      this.postList = res;
    });
  }

}
