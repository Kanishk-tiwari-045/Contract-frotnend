import React, { useRef, useEffect, useState } from "react";
import * as monaco from "monaco-editor";
import { toast } from "sonner";

const SolidityCodeEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [solidityCode, setSolidityCode] = useState<string>("");
  const [deploy, setDeploy] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Define the Solidity language
    monaco.languages.register({ id: "solidity" });

    // Define the syntax highlighting rules for Solidity
    monaco.languages.setMonarchTokensProvider("solidity", {
      keywords: [
        "contract",
        "function",
        "uint",
        "mapping",
        "address",
        "returns",
        "public",
        "private",
        "external",
        "internal",
        "view",
        "payable",
        "pure",
        "constant",
        "if",
        "else",
        "while",
        "for",
        "return",
        "new",
        "delete",
      ],
      operators: [
        "+",
        "-",
        "*",
        "/",
        "%",
        "!",
        "=",
        "==",
        "!=",
        ">",
        ">=",
        "<",
        "<=",
        "&&",
        "||",
        "&",
        "|",
        "^",
        "<<",
        ">>",
        "++",
        "--",
        "?",
        ":",
      ],
      symbols: /[=><!~?:&|+\-*\/\^%]+/,
      tokenizer: {
        root: [
          { include: "@whitespace" },
          { include: "@comment" },
          { include: "@string" },
          { include: "@number" },
          { include: "@keyword" },
          { include: "@operator" },
        ],
        whitespace: [[/\s+/, "white"]],
        comment: [
          [/\/\/.*$/, "comment"],
          [/#.*$/, "comment"],
          [/\/\*/, { token: "comment.quote", next: "@commentEnd" }],
        ],
        commentEnd: [
          [/[^\/*]+/, "comment.quote"],
          [/\*\//, { token: "comment.quote", next: "@pop" }],
          [/[\/*]/, "comment.quote"],
        ],
        string: [
          [/"/, { token: "string.quote", next: "@stringEndDoubleQuote" }],
        ],
        stringEndDoubleQuote: [
          [/[^\\"]+/, "string"],
          [/\\./, "string.escape"],
          [/"/, { token: "string.quote", next: "@pop" }],
        ],
        number: [
          [/\d*\.\d+/, "number.float"],
          [/\d+/, "number"],
        ],
        keyword: [
          [/@[a-zA-Z_$][\w$]*/, "annotation"],
          [
            /\b(contract|function|uint|mapping|address|returns|public|private|external|internal|view|payable|pure|constant|if|else|while|for|return|new|delete)\b/,
            "keyword",
          ],
        ],
        operator: [[/[+\-*\/%=&|<>!^]+/, "operator"]],
      },
    });

    // Initialize Monaco editor
    const editor = monaco.editor.create(editorRef.current!, {
      language: "solidity",
      theme: "vs-dark", // Use a built-in theme or replace with your custom theme
      automaticLayout: true, // Automatically resize the editor based on content
      minimap: {
        enabled: false, // Disable minimap for simplicity
      },
      lineNumbers: "on", // Show line numbers
      folding: true, // Enable code folding
      fontSize: 14, // Set font size
      fontFamily: "Menlo, Monaco, 'Courier New', monospace", // Set font family
    });

    // Set up listener for editor value changes
    editor.onDidChangeModelContent(() => {
      const code = editor.getValue();
      setSolidityCode(code);
    });

    return () => {
      // Dispose of the editor instance when component unmounts
      editor.dispose();
    };
  }, []);

  const handleCompile = async () => {
    if (solidityCode) {
      setLoading(true); // Set loading state to true when compilation starts
      try {
        const response = await fetch("http://localhost:5000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: solidityCode }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("API response:", data);
        // Handle API response here
        setDeploy(true);
        setLoading(false); // Set loading state to false when deployment is successful
        toast.success(`Deployment successful at ${data.deployedContract}`); // Show success toast
        // Reset deploy state after showing the toast
        setTimeout(() => {
          setDeploy(false);
        }, 3000); // Reset deploy state after 5 seconds
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
        setLoading(false); // Set loading state to false in case of error
      }
    } else {
      console.error("Solidity code is empty");
    }
  };

  return (
    <>
      <h2 className="text-center mt-2 mb-2 text-lg font-bold">Editor</h2>
      <div
        ref={editorRef}
        className="solidity-editor w-full h-full border border-gray-700"
        style={{
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
      <button
        className="fixed bottom-4 right-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none"
        onClick={handleCompile}
        disabled={loading} // Disable button while loading
      >
        {loading ? "Compiling..." : "Compile"}
      </button>
      {loading && <div className="fixed top-4 right-6">Compiling...</div>}{" "}
    </>
  );
};

export default SolidityCodeEditor;
