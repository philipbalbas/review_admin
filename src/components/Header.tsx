import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'
import { Text, Box } from 'rebass'

const Header: React.FC = () => {
  return (
    <Box
      paddingX={4}
      paddingY={3}
      sx={{
        boxShadow: 'medium',
      }}
    >
      <Link to='/'>
        <Text fontSize={3}>Review Admin</Text>
      </Link>
    </Box>
  )
}

export default Header
