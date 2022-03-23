import Head from "next/head";

export default function Seo({title}) {
  return (
    <Head>
      <title>{title} | 고나의 개발 블로그</title>
    </Head>
  )
}