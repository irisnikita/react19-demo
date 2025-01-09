// Libraries
import { HighLight } from "@/components";
import { Col, Row } from "antd";
import React from "react";

const codes = [
  {
    title: "Trước đây (React < 19)",
    code: `import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => (
  <input {...props} ref={ref} />
));

const ref = React.createRef();
<Input ref={ref} />;`,
  },
  {
    title: "Bây giờ (React 19):",
    code: `function Input({ ref, ...restOfProps }) {
  return <input ref={ref} {...restOfProps}  />;
}

const ref = React.createRef();
<Input ref={ref} />;`,
  },
];

export const RefDemo: React.FC = () => {
  return (
    <Row gutter={[24, 24]}>
      {codes.map(({ code, title }, index) => {
        return (
          <Col key={index} span={12} className="flex flex-col gap-2 h-full">
            <div className="font-bold">{title}</div>
            <HighLight key={index} language="tsx" code={code} />
          </Col>
        );
      })}
    </Row>
  );
};
