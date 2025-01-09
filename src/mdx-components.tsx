import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, href }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc">{children}</ul>,
    ...components,
    wrapper: ({ children }) => <div className="mdx-wrapper">{children}</div>,
  };
}
