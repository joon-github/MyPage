"use client";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { RefObject } from "react";
import { PutBlobResult } from "@vercel/blob";
import Prism from "prismjs";

import "prismjs/components/prism-clojure.js";

interface WysiwygEditorType {
  initialValue?: string;
  editorRef: RefObject<Editor>;
}

const WysiwygEditor = ({ initialValue = "", editorRef }: WysiwygEditorType) => {
  return (
    <Editor
      name="content"
      ref={editorRef}
      initialValue={initialValue} // 글 수정 시 사용
      initialEditType={"markdown"} // wysiwyg & markdown
      previewStyle="vertical"
      height="calc(100vh - 100px)"
      theme={""} // '' & 'dark'
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      hooks={{
        addImageBlobHook: async (file: any, callback: any) => {
          const response = await fetch(`/api/image?filename=${file.name}`, {
            method: "POST",
            headers: { "Content-Type": "image/*" },
            body: file,
          });
          const svg = (await response.json()) as PutBlobResult;
          callback(svg.url, "이미지");
          return true;
        },
      }}
    />
  );
};
export default WysiwygEditor;
