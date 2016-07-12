import { Component} from '@angular/core';
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

    this.post = this._route.params
      .map(params => params.id)
      .flatMap((id) => {        
        return this._postService.getPost(id);
      });
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