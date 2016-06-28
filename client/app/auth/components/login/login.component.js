import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/common';
import { Router } from '@angular/router-deprecated';

import template from './login.template.html';
import { UserService } from '../../services/user/user.service';
import { validatorFactory } from '../../../posts/validator';

@Component({
  selector: 'login',
  template: template,
  directives: [FORM_DIRECTIVES],
  styleUrls:['css/login.css']
})
export class LoginComponent {

  constructor(userService: UserService, builder: FormBuilder, router: Router) {
    this._userService = userService;
    this._router = router;

    this.loginForm = builder.group({
      email: ['', Validators.compose([Validators.required, validatorFactory('email')])],
      password: ['', Validators.required]
    });
  }

  onSubmit(credentials) {
    this._userService.login(credentials).subscribe((result) => {
      if (result) {
        this._router.navigate(['List']);
      }
    });
  }
}
