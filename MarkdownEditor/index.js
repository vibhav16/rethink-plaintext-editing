import React, { useState, useEffect }from 'react';
import PropTypes from 'prop-types';
import MDEditor from '@uiw/react-md-editor';

import css from './style.css';

function MarkdownEditor({ file, write }) {
  console.log(file, write);
  const [value, setValue] = useState('');

  useEffect(() => {
    (async () => {
      setValue(await file.text());
    })();
  }, [file]);
  return (
    <div className={css.editor}>
      <MDEditor.Markdown source={value} />
    </div>
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default MarkdownEditor;
