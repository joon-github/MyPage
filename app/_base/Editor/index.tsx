'use client'
import '@toast-ui/editor/dist/toastui-editor.css' 
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css' 
import 'tui-color-picker/dist/tui-color-picker.css' 
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import { Editor } from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import { RefObject } from 'react' 

interface WysiwygEditorType {
  initialValue?:string,
  editorRef:RefObject<Editor>
}

const WysiwygEditor = ({initialValue="",editorRef}:WysiwygEditorType) => { 
    const toolbarItems = [ ['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['table', 'link'], ['image'], ['code'], ['scrollSync'], ] 

    
    return( 
      <Editor
        name="content"
        ref={editorRef}
        initialValue={initialValue} // 글 수정 시 사용 
        initialEditType={'wysiwyg'} // wysiwyg & markdown 
        hideModeSwitch={true} 
        previewStyle="vertical"
        height='500px' 
        theme={''} // '' & 'dark' 
        usageStatistics={true} 
        toolbarItems={toolbarItems} 
        plugins={[colorSyntax, ]}
      /> 
    ) 
    
} 
export default WysiwygEditor