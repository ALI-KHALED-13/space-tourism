
import { Routes, Route, useLocation} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import SpaceHeader from './components/SpaceHeader'
import GlobalStyles, { colors } from './GlobalStyles';
import appPages from './pages-data.json';
import { Crew } from './pages/Crew';
import { Destinations } from './pages/Destinations';
import { Home } from './pages/Home';
import { Technology } from './pages/Technology';

/*
- to do:
  *React lazy and suspnse
  * cool loading page
  *not found page
  *error boundry
  * 
*/


function App() {
  const {pathname} = useLocation();

  const pagesComps = {Crew, Destinations, Technology};

  return (
    <ThemeProvider theme={{colors}}>
      <GlobalStyles page={pathname === "/"? "home": pathname.slice(1)} />
  
      <SpaceHeader appPages={appPages}/>
      <Routes>
        <Route path="/" element={<Home nextPagePath={appPages[0].href.path}/>}/>
        
        {appPages.map((page, idx)=> {
          const Comp = pagesComps[page.comp];
          return (
            <Route
              key={page.comp + idx}
              path={page.href.path}
              element={<Comp data={page.data} pageOrder={idx + 1}/>}
            />
          )
        })}      
      </Routes>  
 
    </ThemeProvider>
  )
}

export default App
