import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";

export const AppDevelopmentIcon = () => {
  const color = useColorModeValue("purple.300", "purple.400");
  return (
    <Box color={color}>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 12H73C74.657 12 76 13.343 76 15V65C76 66.657 74.657 68 73 68H7C5.343 68 4 66.657 4 65V15C4 13.343 5.343 12 7 12ZM40 14V66H73C73.552 66 74 65.552 74 65V15C74 14.448 73.552 14 73 14H40Z"
          fill="currentColor"
        />
        <g clipPath="url(#clip0_3302:156)">
          <path
            d="M68 6H46C44.8954 6 44 6.89543 44 8V24C44 25.1046 44.8954 26 46 26H68C69.1046 26 70 25.1046 70 24V8C70 6.89543 69.1046 6 68 6Z"
            fill="#EDE6FF"
          />
          <path
            d="M68 30H46C44.8954 30 44 30.8954 44 32V48C44 49.1046 44.8954 50 46 50H68C69.1046 50 70 49.1046 70 48V32C70 30.8954 69.1046 30 68 30Z"
            fill="#D8C8FF"
          />
          <path
            d="M68 54H46C44.8954 54 44 54.8954 44 56V72C44 73.1046 44.8954 74 46 74H68C69.1046 74 70 73.1046 70 72V56C70 54.8954 69.1046 54 68 54Z"
            fill="#EDE6FF"
          />
        </g>
        <path d="M10 21L12 23L10 25" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 23H23" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M27 23H34" stroke="#7A5DC1" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 31H13" stroke="#4C3487" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 31H25" stroke="#7A5DC1" strokeWidth="2" strokeLinecap="round" />
        <path d="M29 31H34" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 39H14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 39H26" stroke="#7A5DC1" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 39H34" stroke="#4C3487" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 47H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <clipPath id="clip0_3302:156">
            <rect width="34" height="52" fill="white" transform="translate(40 14)" />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
};
