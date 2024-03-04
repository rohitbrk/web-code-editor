// @ts-nocheck
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { _htmlCode, _cssCode, _jsCode } from "../src/utils/boilerplateCode.js";

function App() {
  const [htmlCode, setHtmlCode] = useState(_htmlCode);
  const [cssCode, setCssCode] = useState(_cssCode);
  const [jsCode, setJsCode] = useState(_jsCode);
  const [content, setContent] = useState("");

  useEffect(() => {
    runCode();
  }, []);

  const runCode = () => {
    setContent(`
		<html>
		<body>${htmlCode}</body>
		<style>${cssCode}</style>
		<script>${jsCode}</script>
		</html>
		`);
  };

  const editorOptions = {
    readOnly: false,
    minimap: { enabled: false },
  };

  const LANGS = [
    {
      language: "html",
      value: htmlCode,
      onChange: (htmlCode) => setHtmlCode(htmlCode),
    },
    {
      language: "css",
      value: cssCode,
      onChange: (cssCode) => setCssCode(cssCode),
    },
    {
      language: "javascript",
      value: jsCode,
      onChange: (jsCode) => setJsCode(jsCode),
    },
  ];

  return (
    <>
      <div className="container">
        <h2>Editor</h2>
        <button className="btn" onClick={() => runCode()}>
          run
        </button>
      </div>
      <div className="container">
        <div className="editors">
          {LANGS.map((item) => (
            <div className="editor">
              <Editor
                language={item.language}
                theme="vs-dark"
                value={item.value}
                onChange={item.onChange}
                options={editorOptions}
              />
            </div>
          ))}
        </div>
        <iframe className="preview" srcDoc={content}></iframe>
      </div>
    </>
  );
}

export default App;
