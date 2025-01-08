import { ThemeConfig } from "antd";

export const THEME: ThemeConfig = {
  token: {
    colorPrimary: "var(--color-primary)",
    borderRadius: 10,
    colorText: "var(--color-text)",
    colorTextDescription: "var(--color-text-description)",
    fontFamily: "Quicksand, sans-serif",
  },
  components: {
    Alert: {
      colorText: "var(--color-button-text)",
      colorTextHeading: "var(--color-button-text)",
    },
    Button: {
      fontWeight: 500,
      colorText: "var(--color-button-text)",
    },
    Input: {
      colorText: "var(--color-button-text)",
    },
    InputNumber: {
      colorText: "var(--color-button-text)",
    },
    Layout: {
      siderBg: "var(--background)",
    },
    Menu: {
      darkItemBg: "var(--background)",
    },
    Breadcrumb: {
      linkColor: "var(--color-text-description)",
      lastItemColor: "var(--color-text)",
      linkHoverColor: "var(--color-primary)",
      separatorColor: "var(--color-text-description)",
    },
  },
  cssVar: true,
};
