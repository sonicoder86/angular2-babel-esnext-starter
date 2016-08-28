import { Component, EventEmitter } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostFormComponent } from './post-form.component';

let examplePost = {
  _id: undefined,
  name: 'Sonic',
  website: 'http://www.sonic.com',
  description: 'Short bio'
};

@Component({
  template: '<post-form [post]="actualPost" (saved)="onSave($event)"></post-form>'
})
class TestComponent {
  actualPost = examplePost;

  constructor() {
    this.saveFinished = new EventEmitter();
  }

  onSave(post) {
    this.saveCall = post;
    this.saveFinished.emit();
  }
}

describe('FormComponent', () => {
  function assertInputFields(element) {
    expect(element.querySelector('#post-name').value).toBe(examplePost.name);
    expect(element.querySelector('#post-website').value).toBe(examplePost.website);
    expect(element.querySelector('#post-description').value).toBe(examplePost.description);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostFormComponent, TestComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
  });

  describe('as a Component', () => {
    it('should create form group in constructor and bind it to input elements', () => {
      let fixture = TestBed.createComponent(PostFormComponent);
      let component = fixture.componentInstance;
      let element = fixture.nativeElement;

      component.postForm.controls['name'].updateValue('Sonic');
      component.postForm.controls['website'].updateValue('http://www.sonic.com');
      component.postForm.controls['description'].updateValue('Short bio');
      fixture.detectChanges();

      assertInputFields(element);
    });

    it('should update input fields based on input changes', () => {
      let fixture = TestBed.createComponent(PostFormComponent);
      let component = fixture.componentInstance;
      let element = fixture.nativeElement;

      component.ngOnChanges({
        post: {
          currentValue: examplePost
        }
      });
      fixture.detectChanges();

      assertInputFields(element);
    });

    it('should notify when form is submitted', () => {
      let fixture = TestBed.createComponent(PostFormComponent);
      let component = fixture.componentInstance;

      component.saved.subscribe((value) => {
        expect(value).toBe(examplePost);
      });

      component.onSubmit(examplePost);
    });

    it('should notify when submit button is clicked', () => {
      let fixture = TestBed.createComponent(PostFormComponent);
      let component = fixture.componentInstance;
      let element = fixture.nativeElement;

      component.ngOnChanges({
        post: {
          currentValue: examplePost
        }
      });
      fixture.detectChanges();

      component.saved.subscribe((value) => {
        expect(value).toEqual(examplePost);
      });

      element.querySelector('button[type=submit]').click();
    });
  });

  describe('as a Directive', () => {
    it('should accept post input from parent component and display it in input fields', () => {
      let fixture = TestBed.createComponent(TestComponent);
      let element = fixture.nativeElement;

      fixture.detectChanges();

      assertInputFields(element);
    });

    it('should notify parent component when submit button is clicked', () => {
      let fixture = TestBed.createComponent(TestComponent);
      let component = fixture.componentInstance;
      let element = fixture.nativeElement;

      fixture.detectChanges();

      component.saveFinished.subscribe(() => {
        let value = component.actualPost;
        delete value._id;
        expect(value).toEqual(examplePost);
      });

      element.querySelector('button[type=submit]').click();
      fixture.detectChanges();
    });
  });
});
