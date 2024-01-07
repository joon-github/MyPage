import dynamic from 'next/dynamic';
import React from 'react';

const Editor = () => {
  const QuillNoSSRWrapper = dynamic(()=>import('react-quill'), {	
    ssr: false,
    loading: () => <p>Loading ...</p>,
  })
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' },{ header: '3' }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]
  return <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" />
};

export default Editor;