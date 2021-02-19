import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import css from './style.css';

function PlaintextEditor({ file, write }) {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
 
console.log(file.text())
  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }
  const [value, setValue] = useState('');

  useEffect(() => {
    (async () => {
      setValue(await file.text());
    })();
  }, [file]);
  return (
    <div
      style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
      onClick={focusEditor}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        placeholder={value}
      />
    </div>

  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
