"use client";

// Libraries
import React, { useActionState, useTransition } from "react";
import { useFormStatus } from "react-dom";

// Services
import { productServices } from "@/services";

// Components
import { ReactPlayGround } from "@/components";

const demoCode = `
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button htmlType="submit" disabled={pending}>
      Submit
    </Button>
  );
};

const UseFormStatusDemo = () => {
  return (
    <div className="flex flex-col gap-2.5">
        <span className="text-2xl font-bold">Create product example</span>
        <form
          id="form-demo-2"
          action={async (formData) => {
            const data: any = Object.fromEntries(formData);

            await new Promise((resolve) => {
              setTimeout(() => {
                resolve(true);
              }, 1000);
            });

            await productServices.createProduct({
              data,
            });
          }}
          className="flex flex-col gap-4 w-[500px]"
        >
          <div className="flex flex-col gap-2">
            <span>Product name</span>
            <input className="ant-input css-dev-only-do-not-override-86b0oq ant-input-outlined css-var-R57 ant-input-css-var" name="name" type="text"  />
          </div>
          <div className="flex flex-col gap-2">
            <span>Product price</span>
            <input className="ant-input css-dev-only-do-not-override-86b0oq ant-input-outlined css-var-R57 ant-input-css-var" name="price" type="text" />
          </div>
          <SubmitButton />
        </form>
      </div>
      )
}

render(<UseFormStatusDemo />);
`;

export const UseFormStatusDemo: React.FC = () => {
  return (
    <ReactPlayGround
      code={demoCode}
      scope={{
        useTransition,
        useActionState,
        useFormStatus,
        productServices,
      }}
    />
  );
};
