import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import { NextPage } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { FunctionComponent } from 'react'
import styled from 'styled-components'
import MainLayout from './MainLayout'
import OverlayLayout from './OverlayLayout'

const TransitionDuration = 0.5

export enum Layout {
  Main = 'main',
  Overlay = 'overlay',
}

export type NextPageWithLayout = NextPage & { layout?: Layout }

type AppPropsWithTheme = AppProps & { Component: NextPageWithLayout }

const LayoutComponents: {
  [key in Layout]: FunctionComponent
} = {
  [Layout.Main]: MainLayout,
  [Layout.Overlay]: OverlayLayout,
}

const LayoutMotionProps: {
  [key in Layout]: HTMLMotionProps<'div'>
} = {
  [Layout.Main]: {
    // We need this so the page does not disappear until the overlay is loaded.
    exit: {
      opacity: 1,
    },
    transition: {
      duration: TransitionDuration,
    },
  },
  [Layout.Overlay]: {
    variants: {
      hidden: {
        x: 'calc(-100vw + 100px)',
      },
      visible: {
        x: '0px',
      },
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden',
    transition: {
      duration: TransitionDuration,
      ease: 'easeInOut',
    },
  },
}

export const LayoutWrapper = ({ Component, pageProps }: AppPropsWithTheme) => {
  const layoutId = Component?.layout || Layout.Main
  const LayoutComponent = LayoutComponents[layoutId]
  const motionProps = LayoutMotionProps[layoutId]

  return (
    <Container>
      <AnimatePresence initial={false}>
        <motion.div key={layoutId} {...motionProps}>
          <LayoutComponent>
            <Component {...pageProps} />
          </LayoutComponent>
        </motion.div>
      </AnimatePresence>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-areas: 'content';
  > * {
    grid-area: content;
  }
`
