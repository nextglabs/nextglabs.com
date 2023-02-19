import { Hero } from "@/components/Hero";
import { Seo } from "@/components/Seo";
import { getProjects } from "@/graphql/queries/getProjects";
import { Project } from "@/graphql/schema";
import { Layout } from "@/layout";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import heroImage from "public/assets/images/hero.jpg";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Ticker = dynamic(() => import("@/components/Ticker"), { ssr: false });

interface IndexProps {
  projects: Project[];
}

const Index = ({ projects }: IndexProps) => {
  const { t } = useTranslation("home");
  const metaTitle = t("meta.title");
  const metaDescription = t("meta.description");
  return (
    <>
      <Seo title={metaTitle} description={metaDescription} openGraph={{ title: metaTitle, description: metaDescription }} />
      <Layout heroComponent={<Hero />} heroImage={heroImage}>
        <Projects projects={projects} />
        <Ticker />
        <Services />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { projects } = await getProjects(locale);
  return {
    props: {
      projects,
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
};

export default Index;
