import { Component} from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import template from './article.template.html';
import { PostService } from '../../services/post/post.service';
//ArticleComponent
@Component({
  selector: 'article',
  template: template
})
export class ArticleComponent {
  constructor(postService: PostService, params: RouteParams, router: Router) {
    this._postService = postService;
    this._params = params;
    this._router = router;
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