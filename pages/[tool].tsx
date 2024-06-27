import Head from "next/head";
import NavBar from "pdfequips-navbar/NavBar";
import Tool from "../components/Tool";
import {
  edit_page,
  errors,
  tool,
  tools,
  downloadFile,
  footer,
} from "../src/content/content";
import { OpenGraph } from "pdfequips-open-graph/OpenGraph";
import { useRouter } from "next/router";
import type { tool as _toolType } from "@/content";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import HowTo from "@/components/HowTo";
import { howToSchema, howToType } from "@/src/how-to/how-to";
export type data_type = _toolType["PDF_to_CSV"];

export async function getStaticPaths() {
  const paths = Object.keys(routes).map((key) => ({
    params: { tool: key.substring(1) },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: {
  params: {
    tool: string;
  };
}) {
  const item = routes[`/${params.tool}` as keyof typeof routes].item;
  return { props: { item } };
}

export default ({ item }: { item: data_type }) => {
  const router = useRouter();
  const { asPath } = router;
  const websiteSchema = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: item.seoTitle,
    description: item.description,
    url: `https://www.pdfequips.com${asPath}`,
  };
  return (
    <>
      <Head>
        <title>{item.seoTitle}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <meta name="description" content={item.description} />
        <link rel="icon" type="image/svg+xml" href="/images/icons/logo.svg" />
        <OpenGraph
          ogUrl={`https://www.pdfequips.com${item.to}`}
          ogDescription={item.description}
          ogImageWidth="1200"
          ogImageHeight="630"
          ogLocale="en"
          ogSiteName="PDFEquips"
          ogTitle={item.seoTitle}
          ogImage={`https://www.pdfequips.com/images${item.to}.png`}
        />
      </Head>
      <NavBar path="pdf-to-csv" lang="" />
      <Tool
        tools={tools}
        data={item}
        lang=""
        errors={errors}
        edit_page={edit_page}
        pages={edit_page.pages}
        page={edit_page.page}
        downloadFile={downloadFile}
      /><div className="container">
        <Features features={item.features} />
      </div>
      <div className="container">
        <HowTo howTo={howToSchema as howToType} alt={item.seoTitle} imgSrc={item.to.replace("/", "")} />
      </div>
      <Footer footer={footer} title={item.seoTitle.split("-")[1]} />
    </>
  );
};

// export default ToolPage;
export const routes = {
  "/pdf-to-csv": { item: tool["PDF_to_CSV"] },
};
