"use client";

// Libraries
import { motion } from "motion/react";
import React from "react";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { styled } from "styled-components";

// Components
import { Input, Row, Col, Form, InputNumber, Button, List } from "antd";

interface ReactPlayGroundProps {
  code?: string;
  scope?: Record<string, any>;
}

const ReactPlayGroundWrapper = styled(motion.div)`
  width: 100%;
  .react-playground {
    &__content {
      display: flex;
      width: 100%;
      gap: 30px;

      > div {
        flex: 1;
      }

      pre.prism-code {
        max-height: 600px;
        overflow: auto;
        border-radius: 10px;
      }
    }
  }
`;

const defaultScope = { Input, Row, Col, Form, InputNumber, Button, List };

export const ReactPlayGround: React.FC<ReactPlayGroundProps> = (props) => {
  const { code, scope = defaultScope, ...restProps } = props;

  return (
    <ReactPlayGroundWrapper>
      <LiveProvider
        enableTypeScript
        code={code}
        scope={{ ...defaultScope, ...scope }}
        noInline
        {...restProps}
      >
        <div className="react-playground__content">
          <LiveEditor className="font-mono" />
          <LivePreview />
        </div>
      </LiveProvider>
    </ReactPlayGroundWrapper>
  );
};
