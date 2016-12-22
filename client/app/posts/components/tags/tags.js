import {Component,  NgModule, OnInit, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core'


import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import template from './tags.html';


const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Tags),
    multi: true
};

@Component({
  selector: 'tags',
  template: template,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  styleUrls: ['css/tags.css']
})

export class Tags  implements ControlValueAccessor { 




  isTagsFocused = false;
  @Output() tagsfocusedChange = new EventEmitter();
  
  @Input()
  get tagsfocused() {
    return this.isTagsFocused;
  }


  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  onTouchedCallback = noop;
  onChangeCallback = noop;

  

  @Output()
  labelsChange;
  
  constructor() {
    this.labelsChange = new EventEmitter();
    this.addAreaDisplayed = false;
  }

  ngOnInit() {
    this.labelsChange = new EventEmitter();
  }

  removeValue(value) {
    var index = this.values.indexOf(value, 0);
    if (index != undefined) {
      this.values.splice(index, 1);
      this.labelsChange.emit(this.values);
    }
  }

  addValue(value, event) {
    if(value==='')return;
    this.values.push(value);
    this.labelsChange.emit(this.values);
    this.labelToAdd = '';
  }
  
  //From ControlValueAccessor interface
  writeValue(value) {
      if (value !== this.values) {
          this.values = value;
      }
  } 
    //From ControlValueAccessor interface
  registerOnChange(fn) {
        this.onChangeCallback = fn;
  }

    //From ControlValueAccessor interface
  registerOnTouched(fn) {
        this.onTouchedCallback = fn;
  }  

  onFocus() {
   this.focused = 'md-focused';
   this.isTagsFocused = true;
   console.log('tags focused', this.isTagsFocused)
   this.tagsfocusedChange.emit(this.isTagsFocused)
  }
  focusOutFunction() {
    this.focused = '';
    this.isTagsFocused = false;
    console.log('tags focused', this.isTagsFocused)
    this.tagsfocusedChange.emit(this.isTagsFocused)

  } 
}