export interface Components {
  moduleName: string;
  element: { elementName: string, elementType: string };
  display: Display[];
}

export class Display {
  private label: string;
  private placeholder: string;
  private discription: string;
  private tooptip: string;
  private errorLabel: string;
  private inputMask: string;
  private prefix: string;
  private suffix: string;


  get getlabel(): string {
    return this.label;
  }

  set setlabel(value: string) {
    this.label = value;
  }

  get getplaceholder(): string {
    return this.placeholder;
  }

  set setplaceholder(value: string) {
    this.placeholder = value;
  }

  get getdiscription(): string {
    return this.discription;
  }

  set setdiscription(value: string) {
    this.discription = value;
  }

  get getTooptip(): string {
    return this.tooptip;
  }

  set setTooptip(value: string) {
    this.tooptip = value;
  }

  get getErrorLabel(): string {
    return this.errorLabel;
  }

  set setErrorLabel(value: string) {
    this.errorLabel = value;
  }

  get getInputMask(): string {
    return this.inputMask;
  }

  set setInputMask(value: string) {
    this.inputMask = value;
  }

  get getPefix(): string {
    return this.prefix;
  }

  set setPrefix(value: string) {
    this.prefix = value;
  }

  get getSuffix(): string {
    return this.suffix;
  }

  set setSuffix(value: string) {
    this.suffix = value;
  }
}

export enum HtmlElementsModel {
  inputText = '<div class="form-group"> <label for="usr">{{submodule.labelName}}</label>\n' +
    '  <input type="text" class="form-control" id="usr"> </div>',
}
