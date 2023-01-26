import ContactPage from '@/src/components/ContactPage'
import Layout from '@/src/components/Layout'
import React from 'react'
import { adminPath } from '@/utils/constants'

export default function contact({pageData, siteData}) {
  return (
    <div>
      <Layout data={siteData}>
        <ContactPage contact={siteData?.contact} data={pageData}/>
      </Layout>
    </div>
  )
}
export async function getStaticProps() {
  let pageData = null;
  let siteData = null;

  try {

    pageData = await (await fetch(`${adminPath}/contact?populate=deep`)).json();
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
  } catch (err) {}
  return {
    props: {
      pageData: pageData?.data?.attributes || "null",
      siteData: siteData?.data?.attributes || "null",
    },
  };
}
