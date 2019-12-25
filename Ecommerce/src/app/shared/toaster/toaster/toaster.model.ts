export class Message {
  content: string;
  style: MessageStyle;
  position: string;

  constructor(content, style?, position?) {
    this.content = content;
    this.style = style || MessageStyle.succuss;
    this.position = position || 'botterm-right';
  }
}

export enum MessageStyle {
  succuss = 'bg-success',
  info = 'bg-info',
  warning = 'bg-warning',
  danger = 'bg-danger',
}


export enum MessagePosition {

  bottomRight = 'bottom-right',
  bottomLeft = 'bottom-left',
  topRight = 'top-right',
  topLeft = 'top-left',
}
