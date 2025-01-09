"use client";

// Libraries
import React, { useMemo } from "react";
import { Breadcrumb, BreadcrumbProps, Layout, Typography } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Constants
import { MENU_ITEMS } from "@/constants";

const { Content } = Layout;

export const LayoutContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Hooks
  const pathname = usePathname();

  // Memo
  const menuInfo: any = useMemo(() => {
    return MENU_ITEMS.find((item) => item?.key === pathname);
  }, [pathname]);

  const breadcrumbItems = useMemo(() => {
    const breadcrumbItems: BreadcrumbProps["items"] = [
      {
        key: "/",
        title: "Trang chủ",
      },
    ];

    return breadcrumbItems;
  }, []);

  return (
    <Content className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-1">
        <Breadcrumb
          items={breadcrumbItems}
          itemRender={(item) => (
            <Link href={`${item.key || ""}`}>{item.title}</Link>
          )}
        />
        <Typography.Title className="!text-text" level={3}>
          {(menuInfo as any)?.label}
        </Typography.Title>
      </div>
      <div className="flex flex-col h-full overflow-auto">{children}</div>
    </Content>
  );
};
