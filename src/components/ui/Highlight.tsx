"use client";

// Libraries
import React from "react";
import {
  HighlightProps,
  Highlight as ReactHighlight,
  themes,
} from "prism-react-renderer";

export const HighLight: React.FC<Omit<HighlightProps, "children">> = (
  props
) => {
  const { ...restProps } = props;

  return (
    <ReactHighlight {...restProps} theme={themes.oneDark}>
      {({ /* className, */ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="p-4 rounded-lg">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {/* <span>{i + 1}</span> */}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </ReactHighlight>
  );
};
