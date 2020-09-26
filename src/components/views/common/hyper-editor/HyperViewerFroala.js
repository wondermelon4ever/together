import React from 'react';

import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

class HyperViewer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      content: props.content,
      show: props.show === true ? "block" : "none",
      style: props.style,
      onClose: props.onClose
    }
  }

  render() {
    return(
      <div style={{ display: this.props.show }}>
        <p>{ this.props.title }</p>
        <p>{ this.props.promotionId }</p>
        <FroalaEditorView model={this.props.content} />
        <button onClick={ this.state.onClose }>Close</button>
      </div>
    );
  }
}

export default HyperViewer;