// Libraries
import { usePathname } from "next/navigation";
import { useMemo } from "react";

// Constants
import { MENU_ITEMS } from "@/constants";

/**
 * Get the current menu item from the sidebar menu based on the current pathname.
 *
 * @returns The current menu item or null if not found.
 */
export const useSidebar = () => {
  const pathname = usePathname();

  // Memo
  const currentMenu = useMemo(() => {
    return MENU_ITEMS.find((item) => item?.key === pathname);
  }, [pathname]);

  return {
    currentMenu,
  };
};
