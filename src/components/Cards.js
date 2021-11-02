import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TinderCard from 'react-tinder-card'
import axios from '../api/api.js'

const CardsStyles = styled.div`
  
  .card-container {
    display: flex;
    justify-content: center;
    margin-top: 7vh;
  }

  .card {
    position: relative;
    background-color: #fff;
    width: 600px;
    padding: 1rem;
    max-width: 85vw;
    height: 58vh;
    box-shadow: 0px 18px 53px 0px rgba(0,0,0,0.3);
    border-radius: 20px;
    background-size: cover;
    background-position: center;
  }

  .card h3 {
    position: absolute;
    bottom: 0;
    margin: 10px;
    color: white;
  }

  .swipe {
    position: absolute;
  }
`

function Cards() {

  const [people, setPeople] = useState([])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen')
  }

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/cards')

      setPeople(req.data)
    }
    fetchData()
  },[])

  console.log(people)

  return (
    <CardsStyles>
      <div className='card-container'>
        {people.map((person) => {
          return (
            <TinderCard
              className='swipe'
              key={person.name}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{backgroundImage: `url(${person.imgUrl})`}}
                className='card'
              >
                <h3>{person.name}</h3>
                </div>
            </TinderCard>
          )
        })}
      </div>
    </CardsStyles>
  )
}

export default Cards
