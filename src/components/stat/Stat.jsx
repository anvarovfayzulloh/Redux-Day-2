import { BsSunset } from "react-icons/bs";
import { BsSunrise } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import React from 'react'
import { Container } from '../../utils'
import { useSelector } from 'react-redux'

const Stat = () => {

  const state = useSelector((state) => state)
  console.log(state.searchData.current.humidity)

  const firstDayForecast = state.searchData?.forecast?.forecastday?.[0];

  return (
    <Container>
      <div className="flex flex-wrap  justify-between max-w-[460px] w-full p-[30px] bg-white">
        <div className="flex flex-col gap-[15px]" >
          <div className="flex items-center gap-[15px]" >
            <WiHumidity color="blueviolet" className="w-[40px] h-[40px] bg-white" />
            <div>
              <p className="text-[18px] text-black" >
                Humidity
              </p>
              <p className="text-[16px] text-black" >
                {state.searchData.current.humidity}%
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[15px]" >
            <BsSun color="blueviolet" className="w-[40px] h-[40px] bg-white" />
            <div>
              <p className="text-[18px] text-black" >
                UV index
              </p>
              <p className="text-[16px] text-black" >
                {state.searchData.current.uv} out of 10
              </p>
            </div>
          </div>
        </div>
        {firstDayForecast && (
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-[15px]" >
              <BsSunset color="blueviolet" className="w-[40px] h-[40px] bg-white" />
              <div>
                <p>
                  Sun Set
                </p>
                <p>
                  {firstDayForecast.astro.sunset}
                </p>
              </div>
            </div>
            <div  className="flex items-center gap-[15px]" >
              <BsSunrise color="blueviolet" className="w-[40px] h-[40px] bg-white" />
              <div >
                <p>
                  Sun Rise
                </p>
                <p>
                  {firstDayForecast.astro.sunrise}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Stat