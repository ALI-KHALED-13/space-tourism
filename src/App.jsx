
import React, { Suspense } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import SpaceHeader from './components/SpaceHeader'
import GlobalStyles, { colors } from './GlobalStyles';
import appPages from './pages-data.json';
import { Home } from './pages/Home';
import { SpaceLoader } from './components/SpaceLoader';
const Crew = React.lazy(()=> import('./pages/Crew'));
const Destinations = React.lazy(()=> import('./pages/Destinations'));
const Technology = React.lazy(()=> import('./pages/Technology'));

/*
- to do:
  * error boundry?
  * one last check for page merging
  * testing: cypress, unit for getCommonParent?
  * solidify the configs and spacetoon
*/


function App() {
  const {pathname} = useLocation();

  const pagesComps = {Crew, Destinations, Technology, Home};

  return (
    <ThemeProvider theme={{colors}}>
      <GlobalStyles page={pathname === "/"? "home": pathname.slice(1)} />
  
      <SpaceHeader appPages={appPages}/>
      <Suspense fallback={<SpaceLoader />}>
        <Routes>         
          {appPages.map((page, idx)=> {
            const Comp = pagesComps[page.comp];
            return (
              <Route
                key={page.comp + idx}
                path={page.href.path}
                element={<Comp data={page.data} pageOrder={idx}/>}
              />
            )
          })}  
        </Routes> 
      </Suspense>  
 
    </ThemeProvider>
  )
}

export default App
