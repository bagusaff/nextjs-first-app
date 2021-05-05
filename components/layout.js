import {
  BackToHome,
  Container,
  Header,
  Heading2X1,
  HeadingLg,
  ProfileImage,
} from "./layout.module";
import Head from "next/head";
import Link from "next/link";

const name = "Bagus Amrullah";
export const siteTitle = "Next.js Sample Website";

const Layout = ({ children, home }) => {
  return (
    <>
      <Container>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Header>
          {home ? (
            <>
              <ProfileImage
                priority
                src="/images/profile.jpg"
                height={144}
                className="border"
                width={144}
                alt={name}
              />
              <Heading2X1>{name}</Heading2X1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <ProfileImage
                    priority
                    src="/images/profile.jpg"
                    height={108}
                    className="border"
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <HeadingLg>
                <Link href="/">
                  <a>{name}</a>
                </Link>
              </HeadingLg>
            </>
          )}
        </Header>
        <main>{children}</main>
        {!home && (
          <BackToHome>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </BackToHome>
        )}
      </Container>
    </>
  );
};

export default Layout;
