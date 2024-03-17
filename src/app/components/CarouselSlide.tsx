import React from 'react'
import { Carousel } from 'react-bootstrap'
import {carousalData} from '../../data/getstarted'

function CarouselSlide() {
  return (
    <div>
      <Carousel style={{width:'80vw',height:'80vh',display:"flex",justifyContent:'center',alignItems:'center',}} variant="dark" controls={false}>
      {
        carousalData.map((c) => (
          <Carousel.Item>
        <h2 style={{fontWeight:600}}>{c.title}</h2>
        <p>
          {c.explanation}
        </p>
        <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
        <img style={{objectFit:'cover'}} src={c.image} width={350} height={400}/>
        </div>
      </Carousel.Item>
        ))
      }
    </Carousel>
    </div>
  )
}

export default CarouselSlide
