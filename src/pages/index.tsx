import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Ticker } from "@/components/Ticker";
import { getProjects } from "@/graphql/queries/getProjects";
import { Project } from "@/graphql/schema";
import { Layout } from "@/layout";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import heroImage from "public/assets/images/hero.jpg";

interface IndexProps {
  projects: Project[];
}

const Index = ({ projects }: IndexProps) => (
  <Layout heroComponent={<Hero />} heroImage={heroImage}>
    <Projects projects={projects} />
    <Ticker />
    <Services />
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { projects } = await getProjects();
  return {
    props: {
      projects,
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
};

export default Index;
