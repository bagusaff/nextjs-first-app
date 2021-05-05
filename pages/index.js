import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import { HeadingLg, HeadingMd } from "../components/layout.module";
import Date from "../components/date";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeadingMd>
        <HeadingLg>Blog</HeadingLg>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </HeadingMd>
    </Layout>
  );
}
