import styled from 'styled-components'

const Sidebar = () => (
  <SidebarOuterContainer>
    <SidebarInnerContainer>
      <SidebarTop />
      <SidebarBottom />
    </SidebarInnerContainer>
  </SidebarOuterContainer>
)
const SidebarOuterContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
`
const SidebarInnerContainer = styled.div`
  position: sticky;
  bottom: 0;

  width: 100px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 16px 0;
  min-height: 100vh;
  flex: 0 0 auto;

  /* debugging purposes */
  outline: 2px dashed red;
  outline-offset: -2px;
`
const SidebarContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 16px;
`
const SidebarTop = styled(SidebarContent)`
  flex: 1 0 auto;

  /* debugging purposes */
  &::before {
    display: block;
    width: 75px;
    height: 75px;
    background: red;
    content: ' ';
    border-radius: 50%;
  }
`
const SidebarBottom = styled(SidebarContent)`
  flex: 0 0 auto;

  /* debugging purposes */
  &::before {
    display: block;
    width: 75px;
    height: 75px;
    background: orange;
    content: ' ';
    border-radius: 50%;
  }
`

export default Sidebar
