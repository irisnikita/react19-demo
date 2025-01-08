import ReactSyntaxHighlighter, {
  SyntaxHighlighterProps as ReactSyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export interface SyntaxHighlighterProps extends ReactSyntaxHighlighterProps {
  options?: ReactSyntaxHighlighterProps["options"];
}

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = (props) => {
  const { children, ...restOfProps } = props;

  return (
    <ReactSyntaxHighlighter
      language="jsx"
      style={atomOneDark}
      customStyle={{
        padding: 24,
        borderRadius: 10,
      }}
      {...restOfProps}
    >
      {children}
    </ReactSyntaxHighlighter>
  );
};
