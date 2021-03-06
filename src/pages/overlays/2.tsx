import { Layout, NextPageWithLayout } from '@/components/Theme'
import Head from 'next/head'
import Link from 'next/link'

const Modal: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Modal</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>ANOTHER OVERLAY?!</h1>
      <Link href="/">Check out the Main too!</Link>
    </main>
  </>
)

Modal.layout = Layout.Overlay

export default Modal
