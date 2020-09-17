import React, { useState, useEffect } from 'react';

import { Button, CssBaseline, Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import  { StepperViewProps, StepInfo,  StepHandler } from './StepperViewProps';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

var handleFinalStep : StepHandler;

const StepperView = (props: StepperViewProps) => {
  const classes = useStyles();
  const [title, setTitle] = React.useState(props.title);
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState(props.steps);
  const [values, setValues] = React.useState(new Map());

  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  useEffect(() => {
    setSteps(props.steps);
  }, [props.steps]);

  const handleNext = () => {
    if(handleFinalStep === undefined) handleFinalStep = props.finalStepHandler;
    var step = steps[activeStep];
    var value = step.stepHandler(values);

    values.set(step.name, value);
    setValues(values);

    setActiveStep(activeStep + 1);
  
    if(activeStep+1 >= steps.length) handleFinalStep(values);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step: number): any => {
    if(step >= steps.length) {
      throw new Error('Unknown step');
    } else {
      return steps[step].form;
    }
  }

  return(
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">{ title }</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step.name}>
                <StepLabel>{step.name}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Issue voucher' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

export default StepperView;