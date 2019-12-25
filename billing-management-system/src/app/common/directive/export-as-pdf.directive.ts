import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';

@Directive({
  selector: '[appExportAsPdf]'
})
export class ExportAsPdfDirective {



  @Input() data: ElementRef

  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementId: 'id', // the id of html/table element,
    options: { // html-docx-js document options
      orientation: 'landscape',
      margins: {
        top: '20'
      }
    }
  }

  constructor(private exportAsService: ExportAsService) { }


  @HostListener('click') exportAsPdf(event: Event) {

    // const data = document.getElementById('id');
    // console.log(data);

    this.exportAsService.save(this.exportAsConfig, 'My File Name').subscribe(() => {
      // save started
    });

    // html2canvas(document.querySelector("#id")).then((canvas) => {
    //   // Few necessary setting options
    //   var imgWidth = 208;
    //   var pageHeight = 295;
    //   var imgHeight = canvas.height * imgWidth / canvas.width;
    //   var heightLeft = imgHeight;

    //   console.log(canvas);

    //   const contentDataURL = canvas.toDataURL('image/png')
    //   // window.open(contentDataURL)
    //   let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    //   var position = 0;
    //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    //   // pdf.save('MYPdf.pdf'); // Generated PDF
    // })

    // let doc = new jspdf();
    // let specialElementHandlers = {
    //   '#elementH': function (element, renderer) {
    //     return false;
    //   }
    // }


    // doc.formHTML(data, 15, 15, {
    //   'width': 170,
    //   'elementHandlers': specialElementHandlers
    // })

    // doc.save('abc.pdf')
  }



}
