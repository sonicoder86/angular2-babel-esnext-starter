import { Component} from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import template from './article.template.html';
import { PostService } from '../../services/post/post.service';
import { BreadcrumbService } from '../../../auth/index';
//ArticleComponent
@Component({
  selector: 'article',
  template: template,
  styleUrls: ['css/article.css']
})
export class ArticleComponent {
  constructor(postService: PostService, params: RouteParams, router: Router, breadcrumbService: BreadcrumbService) {
    this._postService = postService;
    this._params = params;
    this._router = router;
    this._prevCategory = breadcrumbService.getLast();
  }
  ngOnInit() {
    this._postService
      .getPost(this._params.get('id')).subscribe(p=>this.post = p);   
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