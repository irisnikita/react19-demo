// Libraries
import React from "react";

// Components
import { HighLight } from "@/components";

const demoCode = `// page.server.jsx - Server Component
import InteractiveButton from './button.client';

export default function Page() {
  const data = fetch('/api/data').then((res) => res.json());

  return (
    <div>
      <h1>Data from Server Component</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <InteractiveButton />
    </div>
  );
}

// button.client.jsx - Client Component
export default function InteractiveButton() {
  const handleClick = () => {
    alert('This is the client-side!');
  };

  return <button onClick={handleClick}>Click me</button>;
}`;

export const ServerComponentDemo: React.FC = () => {
  return <HighLight language="tsx" code={demoCode} />;
};
