import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Sidebar from '../Common/Sidebar'

const debugStyle = (color: string) => `
  outline: 2px dashed ${color};
  outline-offset: -2px;
`

const OverlayLayout = (props: PropsWithChildren<object>) => (
  <LayoutContainer>
    <ContentContainer>
      <Content>{props.children}</Content>
    </ContentContainer>
    <Sidebar />
  </LayoutContainer>
)
const LayoutContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background: #ffffff;
`
const ContentContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  ${debugStyle('orange')}
`
const Content = styled.div`
  width: min(calc(100% - 2rem), 800px);
  flex: 1 0 auto;
  ${debugStyle('pink')}
`

export default OverlayLayout
