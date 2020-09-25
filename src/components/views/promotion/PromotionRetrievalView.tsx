import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

var HyperViewer = require('../common/hyper-editor/HyperViewerFroala.js').default;

var styles = {
  header: {
    display: 'block'
  },
  content: {

  }
}

interface PromotionRetrievalViewProps {
  displayHeader: boolean,
  content: string,
  open: boolean,
  onClose: () => void
}

interface PromotionRetrievalViewState {
  open: boolean,
  content: string,
  onClose: () => void
}

class PromotionRetrievalView extends React.Component<PromotionRetrievalViewProps, PromotionRetrievalViewState> {
  constructor(props: PromotionRetrievalViewProps) {
    super(props);

    styles.header.display = props.displayHeader === true ? 'block' : 'none';

    console.log(JSON.stringify(props))

    this.state = {
      open: this.props.open,
      onClose: this.props.onClose,
      content: this.props.content
    }

    this.handleClose = this.handleClose.bind(this);
  }

  componentWillUpdate(nextProps: any, nextState: any) {
    console.log("componentWillUpdate PromotionRetrievalView");
    console.log("open prop=>" + nextProps.open)

  }

  handleClose = () => {
    console.log("handleClose called.")
    this.state.onClose();
  }

  render() {
    return(
      <div>
          <div style={ styles.header }>
            // header part (promotion title, created date, duration)
            // in case of creator this should be displayed
          </div>
          <div>
            <HyperViewer content={ this.state.content } style={ styles.content } show={ true }/>
          </div>
          <Button variant="contained" color="primary" onClick={ this.handleClose }>Close</Button>
          &nbsp;
          <Button variant="contained" color="primary">Go for update</Button>
      </div>
    );
  }
}

export default PromotionRetrievalView;
