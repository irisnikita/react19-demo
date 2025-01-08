"use client";

// Libraries
import React from "react";

// Libraries
import { useActionState, useEffect, useState, useTransition } from "react";

// Services
import { productServices } from "@/services";

// Components
import { ReactPlayGround } from "@/components";

const demoCode = `
const ActionsDemo = () => {
  const [isPendingProducts, startTransitionProducts] = useTransition();

  // State
  const [state, setState] = useState<{
    products: Product[];
  }>({
    products: [],
  });

  // Variables
  const { products } = state;

  // Handlers
  const handleGetProductList = () => {
    startTransitionProducts(async () => {
      const products = await productServices.getProductList();

      if (products) {
        setState({
          products,
        });
      }
    });
  };

  const [formState, submitAction, isPending] = useActionState<
    Product | null,
    any
  >(async (previousState, formData) => {
    const data = Object.fromEntries(formData);

    if (!data?.name) {
      return {
        error: "Product name is required",
      }
    }

    const product = await productServices.createProduct({
      data: {
        name: data.name,
        price: Number(data.price),
        status: true,
      },
    });

    handleGetProductList();
      
    return { product };
  }, null);

  // Effects
  useEffect(() => {
    handleGetProductList();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2.5">
        <span className="text-2xl font-bold">Create product example</span>
        <form
          key={JSON.stringify(formState)}
          action={submitAction}
          className="flex flex-col gap-4 w-[500px]"
        >
          <div className="flex flex-col gap-2">
            <span>Product name</span>
            <Input name="name" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <span>Product price</span>
            <InputNumber name="price" type="text" />
          </div>
          <Button htmlType="submit" loading={isPending}>
            Submit
          </Button>
          {formState?.error && <div className="text-red-500">{formState?.error}</div>}
        </form>
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="text-2xl font-bold">List of products</span>
        <div className="flex flex-col gap-2.5 h-[300px] w-full overflow-auto">
          <List
            loading={isPendingProducts || isPending}
            itemLayout="horizontal"
            dataSource={products}
            renderItem={(item, index) => {
              return (
                <List.Item key={index}>
                  <List.Item.Meta
                    className="bg-gray-800 p-4 rounded-lg"
                    title={<div><strong>Product Name: </strong>{item.name}</div>}
                    description={<div><strong>Price: </strong>{item.price}</div>}
                  ></List.Item.Meta>
                </List.Item>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

render(<ActionsDemo />);
`;

export const Demo: React.FC = () => {
  return (
    <ReactPlayGround
      code={demoCode}
      scope={{
        useTransition,
        useState,
        useEffect,
        useActionState,
        productServices,
      }}
    />
  );
};
