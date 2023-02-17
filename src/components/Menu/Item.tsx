import { forwardRef, MenuItem as CUIMenuItem, MenuItemProps } from "@chakra-ui/react";

export const MenuItem = forwardRef<MenuItemProps, "button">(({ isDisabled, ...props }, ref) => {
  const hoverStyles = { bgColor: isDisabled ? "initial" : "primary.200", color: isDisabled ? "initial" : "black" };
  return (
    <CUIMenuItem
      ref={ref}
      borderRadius="6"
      bgColor="initial"
      isFocusable={!isDisabled}
      isDisabled={isDisabled}
      _hover={hoverStyles}
      _disabled={{ bgColor: "initial", color: "gray.600", cursor: "not-allowed" }}
      _focusVisible={hoverStyles}
      {...props}
    />
  );
});
