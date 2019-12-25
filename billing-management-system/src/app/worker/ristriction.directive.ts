import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appRestriction]'
})
export class RestrictiionDirective {



    @HostListener('keydown')
    public alphabateNumberRestriction() {
        console.log('--<>--');
    }
}