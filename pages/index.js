import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ammaar was here</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="jellyTIN" />
        <p className="desription">
        Made By Ammaar#8740 Import the code over there - into jellyfin<code>@import url("https://cdn.jsdelivr.net/gh/Ammaar-e/jellyTIN@main/deafult.css");</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
