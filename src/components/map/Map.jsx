import React from 'react'
import { Container } from '../../utils'

const Map = () => {
  return (
    <Container>
        <div className="wrapper rounded-[10px] pt-[40px] px-[20px] pb-[20px] bg-white mt-[40px] mb-[40px]">
        <iframe id="map" src="https://maps.google.com/maps?q=Moscow%20Dates%10Products&amp;t=&amp;z=12&amp&output=embed" width="100%" height="250" allowfullscreen frameborder="0">…</iframe>
        </div>
    </Container>
  )
}

export default Map