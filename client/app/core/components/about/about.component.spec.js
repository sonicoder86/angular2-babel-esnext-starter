import { TestBed, async } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent]
    });
    TestBed.compileComponents();
  }));

  it('should display title', () => {
    let fixture = TestBed.createComponent(AboutComponent);
    let header = fixture.nativeElement.querySelector('h1');

    expect(header.textContent).toEqual('About');
  });
});
