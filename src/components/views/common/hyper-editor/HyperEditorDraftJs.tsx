import React from 'react';

import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

interface TextEditorProps {
  editorState: any,
  editor: any
}

const styles = {
  editor: {
    border: '1px solid gray',
    minHeight: '6em'
  }
};

class HyperEditor extends React.Component<any, TextEditorProps> {

  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      editor: undefined
    };
  }

  onChange = (editorState: any) => {
    this.setState({
      editorState: editorState,
      editor: null
    })
  }

  setEditor = (editor: any) => {
    this.setState({
      editor: editor
    });
  };

  focusEditor = () => {
    if (this.state.editor) {
      this.state.editor.focus();
    }
  };

  render() {
    return (
      <div style={styles.editor} onClick={this.focusEditor}>
        <Editor
          ref={this.setEditor}
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
      // <Editor editorState={ this.state.editorState } onChange={(editorState)=> this.onChange(editorState)} />
    );
  }
}

export default HyperEditor;
