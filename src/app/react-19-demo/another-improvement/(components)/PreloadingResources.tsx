// Libraries
import { HighLight } from "@/components";
import React from "react";

const demoCode = `import { preload, preinit } from 'react-dom';

// Preloading script
preinit('analytics.js', { as: 'script' });

// Preloading font
preload('font.woff', { as: 'font', type: 'font/woff2' });

// Preloading stylesheet
preload('styles.css', { as: 'style' });`;

export const PreloadingResources: React.FC = () => {
  return <HighLight language="tsx" code={demoCode} />;
};
