import { MenuList as CUIMenuList, MenuListProps } from "@chakra-ui/react";

export const MenuList = (props: MenuListProps) => (
  <CUIMenuList boxShadow="xl" borderWidth="2px" borderColor="primary.200" bgColor="black" p="3" borderRadius="12" {...props} />
);
