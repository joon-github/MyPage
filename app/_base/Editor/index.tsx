'use client'
import '@toast-ui/editor/dist/toastui-editor.css' 
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css' 
import 'tui-color-picker/dist/tui-color-picker.css' 
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Editor } from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import { RefObject, useState } from 'react'
import { PutBlobResult } from '@vercel/blob'
import { upload } from '@vercel/blob/client';
import Prism from 'prismjs';

// Step 2. Import language files of prismjs that you need
import 'prismjs/components/prism-clojure.js';

interface WysiwygEditorType {
  initialValue?:string,
  editorRef:RefObject<Editor>
}

async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      let base64data = reader.result as string;
      resolve(base64data);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
}


const WysiwygEditor = ({initialValue="",editorRef}:WysiwygEditorType) => { 
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
    return(
      <Editor
        name="content"
        ref={editorRef}
        initialValue={initialValue} // 글 수정 시 사용 
        initialEditType={'wysiwyg'}// wysiwyg & markdown 
        previewStyle="vertical"
        height='calc(100vh - 100px)' 
        theme={''} // '' & 'dark' 
        plugins={[colorSyntax,[codeSyntaxHighlight, { highlighter: Prism }]]}
        hooks={{
          addImageBlobHook: async (file:any, callback:any) => {
            console.log(file)
          
            const response = await fetch(`/api/image?filename=${file.name}`,{
              method:"POST",
              headers: { 'Content-Type': 'image/*', },
              body:file
            })
            const svg = (await response.json()) as PutBlobResult;
            console.log("newBlob: ",svg)
            callback(svg.url,'이미지')
            return true
          },
        }}
      /> 
    ) 
    
} 
export default WysiwygEditor