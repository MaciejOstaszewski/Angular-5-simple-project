import {NgModule} from '@angular/core';
import {CapitalLetterPipe} from './capital-letter.pipe';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    CapitalLetterPipe,
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    CapitalLetterPipe

  ]

})
export class SharedModule {

}
