// Libraries
import React from "react";

// Components
import { ReactPlayGround } from "@/components";

const demoCode = `function MetadataExample() {
  return (
    <>
      <title>Cải tiến React DOM</title>
      <meta name="description" content="Những cải tiến nổi bật trong React DOM ở phiên bản React 19" />
    </>
  );
}

function App() {
  return (
    <div>
      <MetadataExample />
      <h1>Chào mừng đến với React 19</h1>
    </div>
  );
}

render(<App />);  
`;

export const MetaDataDemo: React.FC = () => {
  return <ReactPlayGround code={demoCode} scope={{}} />;
};
