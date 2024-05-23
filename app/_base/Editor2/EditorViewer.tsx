"use client"
import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
import 'prismjs/themes/prism.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import './style.scss'
import Prism from 'prismjs';
const EditorViewer = ({contents}:{contents:string}) => {
  return (
    <>
    {contents && 
      <Viewer 
        initialValue={contents}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    }
  </>
  );
};

export default EditorViewer;