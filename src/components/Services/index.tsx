import { layoutDimensions } from "@/layout/dimensions";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { AnimationIcon } from "../Icons/Animation";
import { AppDevelopmentIcon } from "../Icons/AppDevelopment";
import { ConsultingIcon } from "../Icons/Consulting";
import { MobileDesignIcon } from "../Icons/MobileDesign";
import { PrototypingIcon } from "../Icons/Prototyping";
import { WebDesignIcon } from "../Icons/WebDesign";
import { ServicesList } from "./List";
import { Service } from "./types";

export const Services = () => {
  const services: Service[] = [
    {
      title: "Web Design",
      description:
        "Whether it's designing a new website or refreshing the design of an existing one, I'm happy to help making your project beautiful and easy to use.",
      icon: <WebDesignIcon />,
    },
    {
      title: "FullStack Development ",
      description:
        "Modern browsers offer a lot of possibilities but also demand for a specialized approach. I translate designs to production ready HTML, CSS and Javascript/Typescript.",
      icon: <AppDevelopmentIcon />,
    },
    {
      title: "Mobile Design",
      description:
        "I can provide you with a custom mobile app design, tailored for your tech stack (whether your app is iOS, Android, React Native or based on web technology).",
      icon: <MobileDesignIcon />,
    },
    {
      title: "Prototyping",
      description:
        "The details of design are often hard to express through static images. Interactive prototypes can be helpful for both user testing and design implementation.",
      icon: <PrototypingIcon />,
    },
    {
      title: "Animation",
      description: "Together we can explore how animation can cheer up your production, but also improve its ease of use and perceived speed.",
      icon: <AnimationIcon />,
    },
    {
      title: "Consultancy",
      description:
        "I'm happy to provide my expertise to your team. An audit of your design architecture or a workshop on modern web technology are just a few of the options.",
      icon: <ConsultingIcon />,
    },
  ];
  return (
    <Center id="services">
      <Box w={layoutDimensions.width} my="12">
        <Box pb="12">
          <Heading as="h3" size="xl">
            <span className="underline">Services</span>
          </Heading>
          <Text mt="4" variant="lighter">
            Some of the services I currently offer.
          </Text>
        </Box>
        <ServicesList services={services} />
      </Box>
    </Center>
  );
};
