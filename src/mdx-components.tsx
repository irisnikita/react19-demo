import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ul: ({ children }) => <ul className="list-disc">{children}</ul>,
    ...components,
    wrapper: ({ children }) => <div className="mdx-wrapper">{children}</div>,
  };
}
