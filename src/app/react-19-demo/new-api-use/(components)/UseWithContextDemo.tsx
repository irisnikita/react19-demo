// Libraries
import React from "react";

// Components
import { HighLight } from "@/components";

const demoCode = `const ConfigContext = React.createContext<Product[]>([]);

const ProductList = () => {
  const productList = use(ConfigContext);

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
    <div className="flex flex-col gap-2.5 max-h-[450px] overflow-auto">
      {renderContent(productList)}
    </div>
  );
};

const UseWithContextDemo: React.FC = () => {
  const productList = use(productServices.getProductList());

  return (
  <ConfigContext.Provider value={productList}>
    <ProductList />
  </ConfigContext.Provider>
  )
}`;

export const UseWithContextDemo: React.FC = () => {
  return <HighLight language="tsx" code={demoCode} />;
};
