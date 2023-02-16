import React from 'react'
import Featured from '../../components/featured/Featured.jsx'
import Slide from '../../components/slide/Slide.jsx'
import TrustedBy from '../../components/trustedBy/TrustedBy.jsx'
import "./Home.scss"
import {cards} from "../../data.js"
import CategoryCard from '../../components/categoryCard/CategoryCard.jsx'

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CategoryCard key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home