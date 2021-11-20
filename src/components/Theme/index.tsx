import { NextPage } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import MainLayout from './MainLayout'
import OverlayLayout from './OverlayLayout'

export enum Layout {
  Main,
  Overlay,
}

const Layouts = {
  [Layout.Main]: MainLayout,
  [Layout.Overlay]: OverlayLayout,
}

export type NextPageWithLayout = NextPage & { layout?: Layout }

type AppPropsWithTheme = AppProps & { Component: NextPageWithLayout }

export const LayoutWrapper = ({ Component, pageProps }: AppPropsWithTheme) => {
  const layoutId = Component?.layout || Layout.Main
  const CurrentLayout = Layouts[layoutId]
  return (
    <CurrentLayout>
      <Component {...pageProps} />
    </CurrentLayout>
  )
}
