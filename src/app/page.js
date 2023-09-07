import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram App</title>
        <meta name="description" content="Gerenal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col justify-between">
        <Header />
        <h1>Homepage</h1>
      </main>
    </div>
  );
}
