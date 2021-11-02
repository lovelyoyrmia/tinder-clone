import React from 'react'
import styled from 'styled-components'
import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

const SwipeButtonStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  bottom: 2%;
  position: fixed;

  .MuiIconButton-root {
    background-color: white;
    box-shadow: 0px 10px 53px 0px rgba(0,0,0,0.3) !important;
  }
  .swipeButtons-repeat {
    padding: 1vw !important;
    color: #f5b748 !important;
  }
  .swipeButtons-left {
    padding: 1vw !important;
    color: #ec5e6f !important;
  }
  .swipeButtons-star {
    padding: 1vw !important;
    color: #62b4f9 !important;
  }
  .swipeButtons-right {
    padding: 1vw !important;
    color: #76e2b3 !important;
  }
  .swipeButtons-lightning {
    padding: 1vw !important;
    color: #915dd1 !important;
  }
`

function SwipeButtons() {
  return (
    <SwipeButtonStyles>
      <IconButton className='swipeButtons-repeat'>
        <Replay fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons-left'>
        <Close fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons-star'>
        <StarRate fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons-right'>
        <Favorite fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons-lightning'>
        <FlashOn fontSize='large' />
      </IconButton>
    </SwipeButtonStyles>
  )
}

export default SwipeButtons
