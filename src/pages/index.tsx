import { Layout, NextPageWithLayout } from '@/components/Theme'
import Head from 'next/head'
import Link from 'next/link'

const Main: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Main</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>This is how the Main looks like</h1>
      <Link href="/overlays/1">Check out the Overlay too!</Link>
    </main>
  </>
)

Main.layout = Layout.Main

export default Main
