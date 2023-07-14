import React from 'react'
import Editor from '@monaco-editor/react'
import Loader from './loader'

type CodeInputHighlighterProps = {
  initialCode: string
  language: string
  handleEditorChange: (newValue?: string | undefined) => void
  height: string
}

export const CodeEditor = ({
  initialCode,
  language,
  handleEditorChange,
  height,
}: CodeInputHighlighterProps) => {
  const handleEditorDidMount = (editor: any, monaco: any) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.React,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.CommonJS,
      target: monaco.languages.typescript.ScriptTarget.ES2016,
    })

    const modelUri = monaco.Uri.file('file:///' + 'foo.tsx')
    const model = monaco.editor.createModel(initialCode, language, modelUri)
    editor.setModel(model)
  }

  return (
    <Editor
      height={height}
      defaultLanguage={language}
      value={initialCode}
      className="border-b-2 border-x-2 border-gray-700 rounded-sm shadow-2xl shadow-gray-700"
      onChange={handleEditorChange}
      theme="vs-dark"
      onMount={handleEditorDidMount}
      options={{
        autoIndent: 'keep',
        insertSpaces: true,
        fontSize: 18,
        lineHeight: 0,
        scrollBeyondLastLine: false,
        minimap: {
          enabled: false,
        },
      }}
      loading={<Loader />}
    />
  )
}

export default CodeEditor
