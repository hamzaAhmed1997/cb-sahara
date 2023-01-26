
import HomePage from "@/src/components/HomePage";
import Layout from "@/src/components/Layout";
import { adminPath } from "@/utils/constants";

export default function Home({pageData ,siteData}) {
  console.log("home page data", pageData);
  return (
    <>
      <Layout data={siteData}>
        <HomePage data={pageData}/>
      </Layout>
    </>
  );
}


export async function getStaticProps() {
  let pageData = null;
  let siteData = null;
  try {
    pageData = await (await fetch(`${adminPath}/home?populate=deep`)).json();
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
  } catch (err) {}
  return {
    props: {
      pageData: pageData?.data?.attributes || "null",
      siteData: siteData?.data?.attributes || "null",
    },
  };
}