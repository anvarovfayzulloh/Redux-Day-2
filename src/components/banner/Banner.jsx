import React, { useEffect } from 'react';
import { Container } from '../../utils';
import { useSelector } from 'react-redux';

const Banner = () => {
  const state = useSelector((state) => state);


  const firstDayForecast = state.searchData?.forecast?.forecastday?.[0];

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
  };

  return (
    <section>
      <Container>
        <div className="banner w-full h-[400px] rounded-[20px] relative overflow-hidden py-[20px] flex items-end">
          <div className='w-full flex justify-between px-[40px] py-[30px] absolute z-10 items-end'>
            <div className='flex flex-col justify-start' >
              <div className='w-[80px] h-[80px] flex items-center'>
                <img src={state.searchData?.current?.condition?.icon} alt="Weather Icon" />
              </div>
              <div className='flex flex-col justify-end' >
                <h1 className='text-[130px] text-white font-normal leading-[150px]' >{state.searchData?.current?.temp_c}°</h1>
                <p className='text-[20px] text-white font-semibold' >{state.searchData?.location?.country}, {state.searchData?.location?.name}</p>
              </div>
            </div>
            {firstDayForecast && (
              <div className='flex flex-col items-end' >
                <p className='font-bold mt-[10px] text-white text-[20px]' >
                  {firstDayForecast.astro.sunset}
                </p>
                <p  className='font-semibold mt-[10px] text-white text-[20px]' >
                  Sunset Time, {getDayOfWeek(firstDayForecast.date)}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
      
    </section>
  );
}

export default Banner;
