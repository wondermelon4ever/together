interface StepperViewProps {
  title: string
  finalStepHandler: StepHandler,
  steps: StepInfo[]
}

interface StepInfo {
  name: string,
  form: any,
  stepHandler: StepHandler
}

interface StepHandler {
  (param: Map<string, object>): any 
}

export { StepperViewProps, StepInfo, StepHandler };