import Hero from "@/components/Home/Hero";
import Page from "@/components/Layout/Page";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <Page className="flex items-center justify-center min-h-screen">
      <Hero />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});
