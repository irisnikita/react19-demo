"use client";

import { HighLight } from "@/components";
// Libraries
import { Col, Row } from "antd";
import React from "react";

const CODES = [
  {
    title: "Before Async Transitions",
    code: `import React, { useState } from 'react';

function UpdateName({}) {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    const error = await updateName(name);
    setIsPending(false);
    if (error) {
      setError(error);
      return;
    } 
    redirect("/path");
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}
`,
  },
  {
    title: "After Async Transitions",
    code: `import React, { useState, useTransition } from 'react';

function UpdateName({}) {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
     startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
      redirect("/path");
    });
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}`,
  },
];

export const ActionsAsyncTransitions: React.FC = () => {
  return (
    <Row gutter={[16, 16]} className="py-6">
      {CODES.map(({ code, title }, index) => {
        return (
          <Col
            span={12}
            className="flex flex-col gap-4 items-center"
            key={index}
          >
            <span className="text-description">{title}</span>
            <HighLight language="tsx" code={code} />
          </Col>
        );
      })}
    </Row>
  );
};
