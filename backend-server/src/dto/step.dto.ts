
interface StepDtoCreationAttr {
   selected: boolean;
   ramp: string;
   rate: number;
   value: number;
   holdTime: number;
   runTime: number;
}

export class StepDto {
  readonly selected: boolean;
  readonly ramp: string;
  readonly rate: number;
  readonly value: number;
  readonly holdTime: number;
  readonly runTime: number;


  constructor(step: StepDtoCreationAttr) {
    this.selected = step.selected;
    this.ramp = step.ramp;
    this.rate = step.rate;
    this.value = step.value;
    this.holdTime = step.holdTime;
    this.runTime = step.runTime;
  }
}