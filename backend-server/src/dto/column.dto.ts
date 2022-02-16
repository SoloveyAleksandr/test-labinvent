

interface ColumnDtoCreationAttr {
   controlOn: boolean;
   flow: number;
   pressure: number;
   averageVelocity: number;
   holdupTime: number;
   postRun: number;
}

export class ColumnDto {
  readonly controlOn: boolean;
  readonly flow: number;
  readonly pressure: number;
  readonly averageVelocity: number;
  readonly holdupTime: number;
  readonly postRun: number;


  constructor(attr: ColumnDtoCreationAttr) {
    this.controlOn = attr.controlOn;
    this.flow = attr.flow;
    this.pressure = attr.pressure;
    this.averageVelocity = attr.averageVelocity;
    this.holdupTime = attr.holdupTime;
    this.postRun = attr.postRun;
  }
}