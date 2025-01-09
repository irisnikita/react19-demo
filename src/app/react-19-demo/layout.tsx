// Libraries
import { Layout } from "antd";

// Components
import { Sidebar } from "@/components";

// Constants
import { LayoutContent } from "./(components)";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout className="w-screen h-screen bg-background">
      <Sidebar />
      <LayoutContent>{children}</LayoutContent>
    </Layout>
  );
}
