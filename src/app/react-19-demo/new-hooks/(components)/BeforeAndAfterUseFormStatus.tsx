"use client";

// Libraries
import { Col, Row } from "antd";
import React from "react";

// Components
import { HighLight } from "@/components";

const codes = [
  {
    title: "Trước đây (không sử dụng useFormStatus)",
    code: `import React, { useState } from 'react';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPending(true);

    try {
      await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email }),
      });
    } catch (err) {
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tên" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Đang đăng ký...' : 'Đăng ký'}
      </button>
    </form>
  );
}`,
  },
  {
    title: "Sau đây (sử dụng useFormStatus)",
    code: `'use client';
import React from 'react';
import { useFormStatus } from 'react';

function SignupForm() {
  return (
    <form
      action={async (formData) => {
        await fetch('/api/signup', {
          method: 'POST',
          body: formData,
        });
      }}
    >
      <input name="name" placeholder="Tên của bạn" />
      <input name="email" placeholder="Email của bạn" />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Đang xử lý...' : 'Đăng ký'}
      </button>
    </div>
  );
}`,
  },
];

export const BeforeAndAfterUseFormStatus: React.FC = () => {
  return (
    <>
      <Row gutter={[24, 24]}>
        {codes.map(({ title, code }, index) => {
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
    </>
  );
};
