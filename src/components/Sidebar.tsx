import React from 'react'
import { Flex } from 'rebass'
import { Link } from '@reach/router'
import styled from '@emotion/styled'

const SidebarLink = styled(Link)`
  margin-bottom: 10px;
`

const Sidebar: React.FC = () => {
  return (
    <Flex
      paddingX={4}
      paddingY={3}
      flexDirection='column'
      sx={{
        boxShadow: 'medium',
        height: '100vh',
      }}
    >
      <SidebarLink to='/modules'>Modules</SidebarLink>
      <SidebarLink to='/subjects'>Subjects</SidebarLink>
      <SidebarLink to='/topics'>Topics</SidebarLink>
      <SidebarLink to='/pages'>Pages</SidebarLink>
      <SidebarLink to='/notes'>Notes</SidebarLink>
    </Flex>
  )
}

export default Sidebar
