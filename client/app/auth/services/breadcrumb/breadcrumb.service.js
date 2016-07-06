import { Injectable } from '@angular/core';

@Injectable()
export class BreadcrumbService {
    constructor(){
        this._last = [];
    }
    saveLast(last) {
        if(last.match(/categories.+/)){
              this._last.push(last);
        }
       
    }
    getLast() {
        return this._last[0];
    }
}