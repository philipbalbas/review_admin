import React from 'react'
import { Link } from '@reach/router'

const Header: React.FC = () => {
  return (
    <div>
      <h2>
        <Link to='/'>Review Admin</Link>
      </h2>
    </div>
  )
}

export default Header
