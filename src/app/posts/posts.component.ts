import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
 
  //Criando variaveis e objetos locais
  public posts = [];
  public errorMsg;

  //Criando uma instância de serviço
  constructor(private _blogService: BlogService) { }

  listarPosts() {
    this._blogService.getPost()
                     .subscribe(data => this.posts = data, 
                               error => this.errorMsg = error);
  }
 
  ngOnInit() {
    this.listarPosts();
  }

}
