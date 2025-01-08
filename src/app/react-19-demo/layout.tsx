"use client";

// Libraries
import { Breadcrumb, BreadcrumbProps, Layout, Typography } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

// Components
import { Sidebar } from "@/components";

// Constants
import { MENU_ITEMS } from "@/constants";

const { Content } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Hooks
  const pathname = usePathname();

  // Memo
  const menuInfo = useMemo(() => {
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
    <Layout className="w-screen h-screen bg-background">
      <Sidebar />
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
    </Layout>
  );
}
