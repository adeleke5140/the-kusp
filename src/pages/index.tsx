import Head from "next/head";
import Link from "next/link";
import Layout from "~/components/layout";
import { Lora, Merriweather, Alice } from "next/font/google";

const alice = Alice({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>the Kusp</title>
        <meta
          name="description"
          content="Improving access for under-represented talent in the creative media industries through talent development and talent sourcing."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="mt-36 flex flex-col justify-center gap-4">
          <h1
            className={`capitalise font-serif text-6xl font-medium ${alice.className}`}
          >
            Welcome to <span className="text-tertiary"> the kusp</span>
          </h1>
          <p className="max-w-xl">
            Improving access for under-represented talent in the creative media
            industries through talent development and talent sourcing.
          </p>
          <Link
            href="sign-up"
            className="w-max rounded bg-primary px-12 py-3 text-lg font-medium text-white transition-colors hover:bg-hover focus:outline-none focus:ring-4 focus:ring-focus"
          >
            Get Started
          </Link>
        </div>
      </Layout>
    </>
  );
}
