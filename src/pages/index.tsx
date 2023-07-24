import Head from "next/head";
import Link from "next/link";
import Layout from "~/components/layout";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
          <h1 className={`font-serif text-6xl font-bold ${lora.className}`}>
            Welcome to the kusp
          </h1>
          <p className="max-w-xl">
            Improving access for under-represented talent in the creative media
            industries through talent development and talent sourcing.
          </p>
          <Link
            href="sign-up"
            className="w-max rounded bg-primary px-12 py-3 text-xl font-medium text-white transition-colors hover:bg-hover focus:outline-none focus:ring-4 focus:ring-focus"
          >
            Get Started
          </Link>
        </div>
      </Layout>
    </>
  );
}
