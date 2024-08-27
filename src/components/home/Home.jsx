import { BsMoon } from "react-icons/bs"; 
import { BiSun } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { Container } from '../../utils';
import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const [theme, setTheme] = useState('light');
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(null);
  const { data } = useFetch(query);
  const dispatch = useDispatch();


  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(`key=644f6ce0ca9e401ebb891832211707&q=${search}&days=7&aqi=yes&alerts=no`);
  };

  const handleThemeToggle = (e) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_SEARCH_DATA', payload: data });
    }
  }, [data, dispatch]);

  

  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between h-[100px] px-[20px]">
          <h1 className="text-[#8a2be2] font-bold font-sans text-[24px]">
            Weather App
          </h1>
          <form onSubmit={handleSearch} className="w-full max-w-[600px] h-[40px] items-center flex rounded-[20px] overflow-hidden bg-white px-[20px] box_shadow">
            <input 
              onChange={(e) => setSearch(e.target.value)} 
              className="flex appearance-none flex-1 border-none outline-none text-[18px] bg-transparent text-[#757575]" 
              type="search" 
              placeholder="Search any city..." 
            />
            <button type="submit">
              <BiSearch className="w-5 h-5" />
            </button>
          </form>
          <div className="border border-gray-300 rounded-[30px] flex relative items-center">
            <input 
              onChange={handleThemeToggle}
              id="theme-toggle" 
              type="checkbox" 
              className="appearance-none w-[50px] h-[30px]" 
            />
            <label 
              htmlFor="theme-toggle" 
              className="w-[30px] h-[30px] bg-indigo-700 text-white rounded-full flex items-center justify-center absolute transition-all left-0 duration-300">
              {
                theme === 'light' ? <BiSun className="w-5 h-5" /> : <BsMoon className="w-4 h-4"/>
              }
            </label>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Home;
