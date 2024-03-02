import { useState } from "react";
import Editor from "@monaco-editor/react";
import "./App.css";

function App() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [content, setContent] = useState("");

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
    <div style={{ display: "flex", margin: 0 }}>
      <div>
        {LANGS.map((item) => (
          <Editor
            height="14rem"
            width="40rem"
            language={item.language}
            theme="vs-dark"
            value={item.value}
            onChange={item.onChange}
            options={editorOptions}
          />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={() => runCode()}>run</button>
        <iframe
          style={{
            width: "40rem",
            height: "32rem",
            marginTop: "1.2rem",
          }}
          srcDoc={content}
        ></iframe>
      </div>
    </div>
  );
}

export default App;
