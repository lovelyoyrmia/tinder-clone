import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import { IconButton } from '@material-ui/core'


const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  border-bottom: 1px solid #f9f9f9;

  .header-logo {
    height: 3.5rem;
    object-fit: contain;
  }
  .header-icon {
    padding: 1rem;
  }
`

function Header() {
  return (
    <HeaderStyles>
      <IconButton>
        <PersonIcon fontSize='large' className='header-icon' />
      </IconButton>
      <img className='header-logo' 
          src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png' 
          alt='tinder-logo' />
      <IconButton>
        <ForumIcon fontSize='large' className='header-icon' />
      </IconButton>
    </HeaderStyles>
  )
}

export default Header
