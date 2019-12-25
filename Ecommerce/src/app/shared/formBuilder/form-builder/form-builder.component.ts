import {Component, OnInit} from '@angular/core';
import {Components, HtmlElementsModel} from './formBuilder.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AddEditFormComponent} from './add-edit-form/add-edit-form.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
  animations: [
    trigger('accrodian', [
        state('collaspe', style({height: '0px'})),
        state('expand', style({height: '100px'})),
        transition('collaspe <=> expand', animate('1000ms ease-in'))
      ]
    )
  ]
})
export class FormBuilderComponent implements OnInit {
  constructor(private dialog: MatDialog) {

  }

  state = 'collaspe';

  inputText = `<input type= text name="a">`;
  inputradio = `<input type= radio name="b">`;
  modules: Components[] = [
    {
      moduleName: 'Basic Component',
      element: {
        elementName: 'input_text', elementType: 'text'
      },
      display: ['d', ''c ],
    }];

  dragModule = [];


  ngOnInit(): void {
  };

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.customTransferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(this.dragModule);
  }

  customTransferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    // /** @type {?} */
    const from = this.customClamp(currentIndex, currentArray.length - 1);
    /** @type {?} */
    const to = this.customClamp(targetIndex, targetArray.length);

    // const cloneCurrArray = {...currentArray};
    const clo = {...currentArray[from]};
    if (currentArray.length) {
      targetArray.splice(to, 0, clo);
    }
    // currentArray.splice(from, 1)[0]
  }

  customClamp(value, max) {
    return Math.max(0, Math.min(max, value)
    );
  }

  onAniminate() {
    this.state = (this.state === 'collaspe' ? 'expand' : 'collaspe');
  }

  onDelete(index: number): void {
    console.log(index);
    this.dragModule.splice(index, 1);
  }

//  -------------------------open diaglog------------------------

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
