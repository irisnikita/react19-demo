"use client";

// Libraries
import React from "react";
import { Layout, Menu, SiderProps } from "antd";
import clsx from "clsx";
import { useRouter } from "next/navigation";

// Constants
import { MENU_ITEMS } from "@/constants";

// Hooks
import { useSidebar } from "@/hooks";

interface SidebarProps extends SiderProps {
  options?: unknown;
}

const { Sider } = Layout;

export const Sidebar: React.FC<SidebarProps> = (props) => {
  // Props
  const { className, ...restProps } = props;

  // Hooks
  const router = useRouter();
  const { currentMenu } = useSidebar();

  return (
    <Sider
      {...restProps}
      className={clsx("border-r border-gray-700", className)}
    >
      <Menu
        theme="dark"
        mode="inline"
        className="h-full overflow-auto"
        items={MENU_ITEMS}
        selectedKeys={currentMenu ? [`${currentMenu.key || ""}`] : []}
        onClick={(info) => {
          router.push(info.key);
        }}
      />
    </Sider>
  );
};
