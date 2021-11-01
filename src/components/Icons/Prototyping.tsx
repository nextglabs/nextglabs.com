import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";

export const PrototypingIcon = () => {
  const color = useColorModeValue("pink.300", "pink.400");
  return (
    <Box color={color}>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5627 19.6548L26.8949 27.9416" stroke="#FFCDE6" strokeWidth="1.24747" strokeLinecap="round" />
        <path d="M26.8949 19.6548L18.5627 27.9416" stroke="#FFCDE6" strokeWidth="1.24747" strokeLinecap="round" />
        <path d="M18.5627 33.7314L60.2237 42.7088" stroke="#FFCDE6" strokeWidth="1.24747" strokeLinecap="round" />
        <path d="M60.2237 33.7314L18.5627 42.7088" stroke="#FFCDE6" strokeWidth="1.24747" strokeLinecap="round" />
        <path
          d="M26.2005 18.9644H19.257C18.4901 18.9644 17.8683 19.5827 17.8683 20.3455V27.2512C17.8683 28.0139 18.4901 28.6323 19.257 28.6323H26.2005C26.9675 28.6323 27.5892 28.0139 27.5892 27.2512V20.3455C27.5892 19.5827 26.9675 18.9644 26.2005 18.9644Z"
          stroke="#FFCDE6"
          strokeWidth="1.24747"
          strokeLinecap="round"
        />
        <path
          d="M58.8349 33.041H19.9514C18.801 33.041 17.8683 33.814 17.8683 34.7674V41.6731C17.8683 42.6266 18.801 43.3995 19.9514 43.3995H58.8349C59.9854 43.3995 60.918 42.6266 60.918 41.6731V34.7674C60.918 33.814 59.9854 33.041 58.8349 33.041Z"
          stroke="#FFCDE6"
          strokeWidth="1.24747"
          strokeLinecap="round"
        />
        <path
          d="M35.0363 48.6055H19.9285C18.7907 48.6055 17.8683 49.533 17.8683 50.6772V58.964C17.8683 60.1081 18.7907 61.0357 19.9285 61.0357H35.0363C36.1741 61.0357 37.0965 60.1081 37.0965 58.964V50.6772C37.0965 49.533 36.1741 48.6055 35.0363 48.6055Z"
          stroke="#FFCDE6"
          strokeWidth="1.24747"
          strokeLinecap="round"
        />
        <path
          d="M59.0715 48.6055H43.9637C42.8259 48.6055 41.9035 49.533 41.9035 50.6772V58.964C41.9035 60.1081 42.8259 61.0357 43.9637 61.0357H59.0715C60.2093 61.0357 61.1316 60.1081 61.1316 58.964V50.6772C61.1316 49.533 60.2093 48.6055 59.0715 48.6055Z"
          stroke="#FFCDE6"
          strokeWidth="1.24747"
          strokeLinecap="round"
        />
        <path d="M37.3101 23.7988H42.8649" stroke="#FFCDE6" strokeWidth="1.24747" strokeLinecap="round" />
        <path d="M47.031 23.7983H51.1971" stroke="#FFCDE6" strokeWidth="1.24747" strokeLinecap="round" />
        <path d="M55.3632 23.7983H60.918" stroke="#FFCDE6" strokeWidth="1.24747" strokeLinecap="round" />
        <rect x="5" y="13" width="70" height="54" rx="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Box>
  );
};
