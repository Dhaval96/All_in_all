
export class MainNavigationModel {
  private id: number;
  private moduleName: string;
  private subComponent: SubNavigationModel[];
  private toggleIcon: boolean;
  private icon: string;

  /*constructor(){}*/
  constructor(id: number, modelName: string, toggleIcon: boolean, icon: string, subComponent: SubNavigationModel[]) {
    this.id = id;
    this.moduleName = modelName;
    this.subComponent = subComponent;
    this.toggleIcon = toggleIcon;
    this.icon = icon;
  }


  get getId(): number {
    return this.id;
  }

  set setId(value: number) {
    this.id = value;
  }

  get getModuleName(): string {
    return this.moduleName;
  }

  set setModuleName(value: string) {
    this.moduleName = value;
  }

  get getSubComponent(): SubNavigationModel[] {
    return this.subComponent;
  }

  set setSubComponent(value: SubNavigationModel[]) {
    this.subComponent = value;
  }

  get toggle_Icon(): boolean {
    return this.toggleIcon;
  }

  set toggle_Icon(value: boolean) {
    this.toggleIcon = value;
  }

  set setIcon(value: string) {
    this.icon = value;
  }

  get getIcon() {
    return this.icon;
  }
}

export class SubNavigationModel {
  private id: number;
  private subModule: string;
  private routerlink: string;
  private icon: string;

  constructor(id: number, subComponentName: string, routerlink: string, icon: string) {
    this.id = id;
    this.subModule = subComponentName;
    this.routerlink = routerlink;
    this.icon = icon;
  }


  get getId(): number {
    return this.id;
  }

  set setId(value: number) {
    this.id = value;
  }

  get getSubComponentName(): string {
    return this.subModule;
  }

  set setSubComponentName(value: string) {
    this.subModule = value;
  }

  get getRouterlink(): string {
    return this.routerlink;
  }

  set setRouterlink(value: string) {

    this.routerlink = value;
  }

  set setIcon(value: string) {
    this.icon = value;
  }

  get getIcon() {
    return this.icon;
  }
}
