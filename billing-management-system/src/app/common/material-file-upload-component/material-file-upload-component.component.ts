import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-material-file-upload-component',
  templateUrl: './material-file-upload-component.component.html',
  styleUrls: ['./material-file-upload-component.component.scss']
})
export class MaterialFileUploadComponentComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  selectedFile: File;
  previewURL: any;

  flag = false;
  size: number;
  @ViewChild('fileUpload', { static: false }) fileObj: HTMLInputElement;
  ngOnInit() {
  }


  onClick(event) {
    // const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    console.log(event);
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

    this.size = (this.selectedFile.size / 1024) / 1024; // convert in mb

    if (this.size > 1) {
      this.flag = false;
    }

    if (this.size <= 2) {
      this.flag = true;
      this.commonService.sendImage(this.selectedFile);
    }
    //this.previewImage();
  }


  // previewImage() {
  //   const mineType = this.selectedFile.type;

  //   if (mineType.match(/image\/*/) == null) {
  //     return;
  //   }

  //   let reader = new FileReader();
  //   reader.readAsDataURL(this.selectedFile);
  //   reader.onload = (event) => {
  //     this.previewURL = reader.result;
  //   };


  //   


  // }
}
