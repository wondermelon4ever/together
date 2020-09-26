import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { autoPlay } from 'react-swipeable-views-utils';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';

import SwipeableTextMobileStepDialog from './SwipeableTextMobileStepDialog';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

enum LinkType { Popup = 1, tp1, tp2, tp3 }

interface SwipeableStepInfo {
  id: string,
  label: string,
  imgPath: string,
  linkType: LinkType,
  viewId?: string,
  stepDetailedDialogCreator: StepDetailedDialogCreator
}

interface StepDetailedDialogCreator {
  (id: string) : any;
}

interface SwipeableStepperProps {
  title: string,
  steps: SwipeableStepInfo[],
  clickEventCallback: (id: string) => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

const SwipeableTextMobileStepperView = (props: SwipeableStepperProps) => {
  const classes = useStyles();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState(props.steps);
  const [label, setLabel] = React.useState("");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [contentId, setContentId] = React.useState("");
  const [dialogContents, setDialogContents] = React.useState(<div></div>);

  const maxSteps = props.steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const onClickImage = (step: number) => {
    setLabel(steps[step].label);
    setContentId(steps[step].id);
    setDialogContents(steps[step].stepDetailedDialogCreator(contentId));

    setDialogOpen(true);
    props.clickEventCallback(steps[step].id);
  }

  const onDialogClose = () => {
    setDialogOpen(false);
  }

  return(
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {steps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} onClick={(event)=> { onClickImage(index) }}/>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      {/* <SwipeableTextMobileStepDialog
        label={ label }
        contentId={ contentId }
        onClose={ onDialogClose }
        open={ dialogOpen }
        dialogContents={ dialogContents }
      /> */}
    </div>
  );
}

export default SwipeableTextMobileStepperView;
export { LinkType, SwipeableStepInfo, SwipeableStepperProps, StepDetailedDialogCreator };