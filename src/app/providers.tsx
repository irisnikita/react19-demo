// Libraries
import { App, ConfigProvider } from "antd";
import { MotionConfig } from "motion/react";
import React from "react";

// Constants
import { THEME } from "@/constants";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
      <ConfigProvider theme={THEME}>
        <App>{children}</App>
      </ConfigProvider>
    </MotionConfig>
  );
};
