import React from 'react'
import Gallerypage from '@/src/components/Gallery'
import Layout from '@/src/components/Layout'
import { adminPath } from "@/utils/constants";

export default function Gallery({galleryData}) {
  console.log("gallery data ", galleryData)
  return (
    <>
    <Layout>
      <Gallerypage data={galleryData}/>
      </Layout>
    </>
  )
}
export async function getStaticProps() {
  let galleryData = null;
  try {
    galleryData = await (await fetch(`${adminPath}/gallery?populate=deep`)).json();
  } catch (err) {}
  return {
    props: {
      galleryData: galleryData?.data?.attributes || "null",
    },
  };
}