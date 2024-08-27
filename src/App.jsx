import './App.css'
import Home from "./components/home/Home"
import Banner from "./components/banner/Banner"
import { useSelector } from 'react-redux'
import { Container } from './utils';
import Map from './components/map/Map';
import Stat from "./components/stat/Stat"

function App() {

  const state = useSelector((state) => state);

  if (state.searchData === null) {
    return (
      <>
        <Home />
        <div className='' >
          <Container>
            <div className='flex items-center justify-center' >
              <h1 className='text-[30px] text-[#8a2be2] font-bold' >
                Search a city
              </h1>
            </div>
          </Container>
        </div>
      </>
    )
  }

  return (
    <div className='bg-[#f8f8ff]'>
      <Home />
      <Banner />
      <Map/>
      <Stat/>
    </div>
  )
}

export default App
