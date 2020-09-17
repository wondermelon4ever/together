import React from 'react';

import { Dialog, DialogTitle } from '@material-ui/core';

interface SwipeableTextMobileStepDialogProps {
  label: string,
  contentId: string,
  open: boolean
  onClose: () => void;
  dialogContents: any
}

class SwipeableTextMobileStepDialog extends React.Component<SwipeableTextMobileStepDialogProps> {
  constructor(props: SwipeableTextMobileStepDialogProps) {
    super(props);
  }

  handleClose = () => {
    this.props.onClose();
  }

  render() {
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.props.open}>
        <DialogTitle id="simple-dialog-title">{ this.props.label }</DialogTitle>
        {
          this.props.dialogContents
        }
      </Dialog>
    );
  }
}

export default SwipeableTextMobileStepDialog;