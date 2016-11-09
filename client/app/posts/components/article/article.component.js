import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import template from './article.template.html';
import { PostService } from '../../services/post/post.service';
//import { BreadcrumbService } from '../../../auth/index';
//ArticleComponent
@Component({
  selector: 'article',
  template: template,
  styleUrls: ['css/article.css']
})
export class ArticleComponent {
  constructor(postService: PostService, route: ActivatedRoute /*breadcrumbService: BreadcrumbService*/) {
    this._postService = postService;    
    this._route = route;
    //this._prevCategory = breadcrumbService.getLast();
  }
  ngOnInit() {
     this._postService.getPost(this._route.params.value.id).subscribe(post=>this.post = post);     
  }
  ngAfterViewChecked() {
    let codeElems = document.querySelectorAll('code');
    if(typeof Prism === 'object' && codeElems.length) {
      
      [].forEach.call(codeElems, el => {
        Prism.highlightElement(el)
      });

    }
  }
 }