import React from 'react';

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));

class HyperEditor extends React.Component {
  render() {
    return (
        <div className="App">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                config={{ckfinder: {
                    // Upload the images to the server using the CKFinder QuickUpload command.
                    // uploadUrl: 'http://localhost:9001/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
                    // uploadUrl: 'http://localhost:9001/upload?file=dfsfsdf'
                    uploadUrl: 'http://localhost:9001/ckfinder/core/connector/java/connector.java'
                }}}
                onInit={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                }}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                }}
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                }}
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                }}
            />
        </div>
    );
  }
}

export default HyperEditor;