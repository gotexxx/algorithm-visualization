"use client";
import React, { useEffect } from "react";
import Prism from "prismjs";

interface CodeSnippetProps {
  code: string;
}

export function CodeSnippet({ code }: CodeSnippetProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre>
      <code className={`language-javascript`}>{code}</code>
    </pre>
  );
}
