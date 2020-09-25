import React from 'react';

import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

class HyperViewerFroala extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      content: props.content,
      show: props.show === true ? "block" : "none",
      style: props.style
    }
  }

  render() {
    return(
      <div style={{ display: this.state.show }}>
        <p>{ this.state.title }</p>
        <p>{ this.props.promotionId }</p>
        <FroalaEditorView model={this.state.content} />
      </div>
    );
  }
}

export default HyperViewerFroala;