import React from 'react'
import {Title, Panel} from '@shturval/takelage-ui';
import {Link} from 'react-router-dom'

export const NotFoundPageComponent = () => {
  const linkStyle = {
    color: '#cc9',
    textDecoration: 'underline',
  }
  
  return (
    <Panel>
      <Title>
        Page Not Found 
      </Title>
      Retun to <Link to={'/'} style={linkStyle}>main page</Link>
    </Panel>
  )
};