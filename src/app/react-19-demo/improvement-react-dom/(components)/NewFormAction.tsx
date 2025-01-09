"use client";

// Libraries
import React from "react";

// Components
import { ReactPlayGround } from "@/components";

const code = `const NewFormAction = () => {
 return (
      <form
        action={async (formData) => {
          const data = Object.fromEntries(formData);
          console.log({ data });
        }}
        className="flex flex-col gap-2.5"
      >
        <span className="text-2xl font-bold">Test Form action</span>
        <Input name="name" placeholder="Input your name" />
        <InputNumber name="age" className="w-full" placeholder="Input your age" />
        <Button htmlType="submit">Submit</Button>
      </form>
  );
}
  
render(<NewFormAction />)`;

export const NewFormAction: React.FC = () => {
  return <ReactPlayGround code={code} scope={{}} />;
};
