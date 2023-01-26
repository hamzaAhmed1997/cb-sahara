import React from 'react'
import Gallerypage from '@/src/components/Gallery'
import Layout from '@/src/components/Layout'
import { adminPath } from "@/utils/constants";

export default function Gallery({galleryData, siteData}) {
  return (
    <>
    <Layout data={siteData}>
      <Gallerypage data={galleryData}/>
      </Layout>
    </>
  )
}
export async function getStaticProps() {
  let galleryData = null;
  let siteData = null;
  try {
    galleryData = await (await fetch(`${adminPath}/gallery?populate=deep`)).json();
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
  } catch (err) {}
  return {
    props: {
      galleryData: galleryData?.data?.attributes || "null",
      siteData: siteData?.data?.attributes || "null",
    },
  };
}
