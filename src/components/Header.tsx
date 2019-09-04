import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'
import { Text } from 'rebass'

const HeaderStyles = styled.div`
  padding: 10px 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <Link to='/'>
        <Text fontSize={3}>Review Admin</Text>
      </Link>
    </HeaderStyles>
  )
}

export default Header
