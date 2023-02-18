import { Memoji } from "@/components/Memoji";
import { Layout } from "@/layout";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { FiArrowLeft } from "react-icons/fi";
import { GetStaticProps } from "next";

export default function FourOhFour() {
  const router = useRouter();
  const { t } = useTranslation("404");
  const [buttonText, setButtonText] = useState("goBack");

  useEffect(() => {
    if (window) {
      // Back to previous page is unlikely to work in this case.
      // Let's update the button text for better UX
      if (window.history.length <= 2) {
        setButtonText("gotoHome");
      }
    }
  }, []);

  const handleGoBack = () => {
    if (window) {
      if (window.history.length > 2) {
        return router.back();
      }
      // In this case the user came directly to an undefined page,
      // (ie: typing the wrong url in a new browser window)
      // So we redirect to the home page.
      return router.push("/");
    }
  };

  return (
    <Layout>
      <VStack spacing="6" mt="24" textAlign="center">
        <Heading as="h1" size="lg">
          {t("title")}
        </Heading>
        <HStack spacing={-8}>
          <Memoji alt="Memoji Surprised" src="/assets/images/memoji-surprised.png" />
          <Memoji alt="Memoji Surprised" src="/assets/images/memoji-sad.png" />
        </HStack>
        <Text variant="lighter">{t("description")}</Text>
        <Button leftIcon={<FiArrowLeft />} onClick={handleGoBack}>
          {t(buttonText)}
        </Button>
      </VStack>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "404"])),
    },
  };
};
