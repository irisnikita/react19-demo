// Libraries
import React, { use } from "react";
import { Col, Row } from "antd";

// Schemas
import { Product } from "@/schemas";

// Services
import { productServices } from "@/services";

// Components
import { HighLight } from "@/components";

const demoCode = `const UseDemo: React.FC = () => {
  const productList = use(productServices.getProductList());

  // Render
  const renderContent = (productList?: Product[]) => {
    return productList?.map((product) => {
      return (
        <div key={product.id} className="bg-gray-800 p-6 rounded-xl">
          <span>
            <strong>Product name: </strong>
            {product.name}
          </span>
          <span>
            <strong>Product price: </strong>
            {product.price}
          </span>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col gap-2.5 max-h-[400px] overflow-auto">
      {renderContent(productList)}
    </div>
  );
};`;

export const UseDemo: React.FC = () => {
  const productList = use(productServices.getProductList());

  // Render
  const renderContent = (productList?: Product[]) => {
    return productList?.map((product) => {
      return (
        <div
          key={product.id}
          className="flex flex-col gap-2 bg-gray-800 p-6 rounded-xl"
        >
          <span>
            <strong>Product name: </strong>
            {product.name}
          </span>
          <span>
            <strong>Product price: </strong>
            {product.price}
          </span>
        </div>
      );
    });
  };

  return (
    <Row gutter={[24, 24]}>
      <Col span={12}>
        <HighLight language="tsx" code={demoCode} />
      </Col>
      <Col span={12}>
        <div className="flex flex-col gap-2.5 max-h-[450px] overflow-auto">
          {renderContent(productList)}
        </div>
      </Col>
    </Row>
  );
};
