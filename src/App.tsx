import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [htmlCode, setHtmlCode] = useState("<h1>hello world !</h1>");
  const [cssCode, setCssCode] = useState(`h1{
    background-color:#007bff
}`);
  const [jsCode, setJsCode] = useState(
    "document.querySelector('h1').style.borderRadius = '0.4rem'"
  );
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
        <div>
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
