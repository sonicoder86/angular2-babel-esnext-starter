<<<<<<< HEAD
import { TestComponentBuilder } from '@angular/compiler/testing';
=======
import { TestBed, async } from '@angular/core/testing';
>>>>>>> 6287fe8... upgrade to module syntax

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
<<<<<<< HEAD
  let subjectElement;

  beforeEachProviders(() => [
    TestComponentBuilder
  ]);

  beforeEach(async(inject([TestComponentBuilder], (componentBuilder) => {
    return componentBuilder
      .createAsync(AboutComponent)
      .then(fixture => {
        subjectElement = fixture.nativeElement;
      });
  })));
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent]
    });
    TestBed.compileComponents();
  }));
>>>>>>> 6287fe8... upgrade to module syntax

  it('should display title', () => {
    let fixture = TestBed.createComponent(AboutComponent);
    let header = fixture.nativeElement.querySelector('h1');

    expect(header.textContent).toEqual('About');
  });
});
