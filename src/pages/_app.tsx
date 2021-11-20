import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LayoutWrapper } from '@/components/Theme'

function MyApp(props: AppProps) {
  return <LayoutWrapper {...props} />
}

export default MyApp
