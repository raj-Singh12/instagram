"use client"
import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PrivateComponent from "./auth/privatecomponent/page";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram App</title>
        <meta name="description" content="Gerenal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col justify-between">
        {/* Header */}
        <Header />

        {/* Feed */}
        <Feed />
        <h1>Homepage</h1>
      </main>
    </div>
  );
}
