// Libraries
import React from "react";
import {
  Sandpack as ReactSandpack,
  SandpackProps as ReactSandpackProps,
} from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";

import { Input } from "antd";

interface SandpackProps extends ReactSandpackProps {
  options?: any;
}

export const Sandpack: React.FC<SandpackProps> = (props) => {
  const { options, ...restProps } = props;

  return (
    <ReactSandpack
      theme={atomDark}
      template="react-ts"
      options={{
        externalResources: [Input],
        editorHeight: "500px",
        showConsoleButton: true,
        showInlineErrors: true,
        showNavigator: true,
        showLineNumbers: true,
        showTabs: true,
        ...options,
      }}
      {...restProps}
    />
  );
};
