import { StepDto } from "./step.dto";

interface PressureDtoCreationAttr {
   steps: StepDto[];
}

export class PressureDto {
  readonly tableSteps: StepDto[];


  constructor(table: PressureDtoCreationAttr) {
    this.tableSteps = table.steps;
  }
}