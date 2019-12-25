import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'converterPipe'
})
export class ConverterPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(v: any): SafeHtml {

    console.log(v);


    return this.sanitizer.bypassSecurityTrustHtml(v);
  }
}
