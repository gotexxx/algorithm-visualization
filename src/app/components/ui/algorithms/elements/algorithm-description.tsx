import React from "react";
import { CodeSnippet } from "./code-snippet";
interface AlgorithmDescriptionProps {
  children?: React.ReactNode;
  title: string;
  text: string;
  code: string;
}

export function AlgorithmDescription({
  children,
  title,
  text,
  code,
}: AlgorithmDescriptionProps) {
  return (
    <div className="text-black relative w-full bg-white grid lg:grid-cols-2 full lg:min-h-[600px] h-auto">
      <div className="flex items-center justify-center flex-col order-2 lg:order-1">
        <h2 className="text-[52px]">{title}</h2>
        <p className="text-[24px]">{text}</p>
        <CodeSnippet code={code} />
      </div>
      {children}
    </div>
  );
}
