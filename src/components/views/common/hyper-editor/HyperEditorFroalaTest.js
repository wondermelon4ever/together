import React from 'react';

import axios from "axios";

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';

import Froalaeditor from 'froala-editor';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';
import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';

import { Modal } from '@material-ui/core';

import PromotionRetrievalView from '../../promotion/PromotionRetrievalView';

import SplitPane from 'react-split-pane';

Froalaeditor.DefineIcon('alert', {NAME: 'info', SVG_KEY: 'help'});
  Froalaeditor.RegisterCommand('alert', {
    title: 'Hello',
    focus: false,
    undo: false,
    refreshAfterCallback: false,
    callback: function () {
      alert('Hello!');
    }
  });

  Froalaeditor.DefineIcon('clear', {NAME: 'remove', SVG_KEY: 'remove'});
  Froalaeditor.RegisterCommand('clear', {
    title: 'Clear HTML',
    focus: false,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      this.html.set('');
      this.events.focus();
    }
  });

  Froalaeditor.DefineIcon('insert', {NAME: 'plus', SVG_KEY: 'add'});
  Froalaeditor.RegisterCommand('insert', {
    title: 'Insert HTML',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      this.html.insert('My New HTML');
    }
  });

const config = {
  placeholderText: 'Edit Your Content Here!',
  charCounterCount: true,
  immediateReactModelUpdate: true,
  placeholder: "Edit Me",
  // toolbarInline: true,
  events : {
    'focus' : function(e, editor) {
      console.log(e)
      // console.log(editor.selection.get());
    },
    initialized: function (e) {
      var editor = this;
      console.log('initialized');
    },
    'image.beforeUpload': function (images) {
      console.log('image.beforeUpload');
    },
    'image.uploaded': function (response) {
      console.log('image.uploaded');
    },
    'image.inserted': function ($img, response) {
      console.log('image.inserted');
    },
    'image.replaced': function ($img, response) {
      console.log('image.replaced');
    },
    'image.error': function (error, response) {
      console.log('image.error' + JSON.stringify(error));
    }
  },
  // reactIgnoreAttrs: ['class', 'id'],
  // pluginsEnabled: ['align', 'link'],
  // reactIgnoreAttrs: ['tmpattr'],
  imageUploadParam:'image',
  imageUploadURL:'http://localhost:9001/upload',
  imageUploadMethod:'POST',
  imageMaxSize:500000,
  imageAllowedTypes:['jpeg', 'jpg', 'png'],
  toolbarButtons: {
    moreText: {
      // List of buttons used in the  group.
      buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],

      // Alignment of the group in the toolbar.
      align: 'left',

      // By default, 3 buttons are shown in the main toolbar. The rest of them are available when using the more button.
      buttonsVisible: 3
    },


    moreParagraph: {
      buttons: ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote'],
      align: 'left',
      buttonsVisible: 3
    },

    moreRich: {
      buttons: ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR'],
      align: 'left',
      buttonsVisible: 3
    },

    moreMisc: {
      buttons: ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
      align: 'right',
      buttonsVisible: 2
    }
  },
  imageEditButtons: ['imageReplace', 'imageAlign', 'imageRemove', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove', '-', 'imageDisplay', 'imageStyle', 'imageAlt', 'imageSize']
  // toolbarButtonsXS: [['undo', 'redo'], ['bold', 'italic', 'underline']], for small devices (>= 768 px)
  // toolbarButtonsMD: [['undo', 'redo'], ['bold', 'italic', 'underline']], -> for medium devices (>= 992 px)
  // toolbarButtonsSM: [['undo', 'redo'], ['bold', 'italic', 'underline']], -> for small devices (>= 768 px)
  // toolbarButtons: [['undo', 'redo'], ['bold', 'italic', 'underline']], -> for large devices (>= 1200 px)
}

class HyperEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      myTitle: 'Click here to edit this text.',
      model: "",
      content: "", // props.contents
      preview: "none",
      showPreview: false
    }

    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.save = this.save.bind(this);
    this.fetch = this.fetch.bind(this);
    this.preview = this.preview.bind(this);
    this.closeProview = this.closeProview.bind(this);
  }

  handleModelChange(model) {
    this.setState({
      model: model,
      content: model
    });
  }

  handleInputChange (e) {
    this.setState({
      content: e.target.value
    })
  }

  save() {
    axios.post("http://localhost:9001/promotion/save", {
      promotionContent: this.state.content
    }).then(response => {
      console.log(response.data);
    }).catch(((error)=>{
      console.error(error);
    })) 
  }

  fetch() {
    axios.get("http://localhost:9001/promotion", {
    }).then(response => {
      this.setState({
        content: response.data
      })
    }).catch(((error)=>{
      console.error(error);
    })) 
  }

  preview() {
    console.log("this.state.preview==>" + this.state.preview)
    if(this.state.preview === 'none') {
      this.setState({
        preview: 'block',
        showPreview: true
      });
    } else {
      this.setState({
        preview: 'none',
        showPreview: false
      });
    }
  }

  closeProview() {
    this.setState({
      proview: 'none',
      showPreview: false
    });
  }

  render() {
    return  (
        <SplitPane split="vertical">
          <div style={{ width: 900 }}>
            <FroalaEditorComponent 
              tag='textarea'
              toolbarSticky={true}
              config={config}
              model={this.state.content}
              onModelChange={this.handleModelChange}
              onChange={this.handleInputChange}
            />
            <button onClick={ this.save }>Confirm</button>
            <button onClick={ this.fetch }>Fetch</button>
            <button onClick={ this.preview }>{this.state.preview === "block"? "Hide" : "Preview" }</button>
          </div>
          <div style={{ display: this.state.preview, width: 900 }}>
          {/* <Modal
            open={this.state.showPreview}
            onClose={this.closeProview}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <PromotionRetrievalView displayHeader={false} content={ this.state.content } open={ 
                this.state.showPreview 
                } onClose={ this.closeProview } />
          </Modal> */}
            <FroalaEditorView model={this.state.content} />
            {/* <FroalaEditorImg config={this.config} />
                <FroalaEditorButton config={this.config} />
                <FroalaEditorInput config={this.config} />
                <FroalaEditorA config={this.config} /> */ }
          </div>
        </SplitPane>
    );
  }
}

export default HyperEditor;