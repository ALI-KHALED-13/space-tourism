
import React, { Suspense, useState } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import logo from "./assets/shared/logo.svg";
import toonlogo from "./assets/shared/StoonLogo.png";
import SpaceHeader from './components/SpaceHeader'
import GlobalStyles, { colors } from './GlobalStyles';
import {pagesData} from './pagesData';
import { Home } from './pages/Home';
const Crew = React.lazy(()=> import('./pages/Crew'));
const Destinations = React.lazy(()=> import('./pages/Destinations'));
const Technology = React.lazy(()=> import('./pages/Technology'));

/*
- to do:
  * error boundry?
  * one last check for page merging
  * testing: cypress, unit for getCommonParent?
*/


function App() {
  const {pathname} = useLocation();
  const [websiteWorld, setWebsiteWorld] = useState("real");

  const logos = {"real": logo, "toon": toonlogo};
  const appPages = pagesData[websiteWorld];
  const appLogo = logos[websiteWorld];

  const pagesComps = {Crew, Destinations, Technology, Home};

  return (
    <ThemeProvider theme={{colors}}>
      <GlobalStyles page={pathname === "/"? "home": pathname.slice(1)} />
  
      <SpaceHeader appPages={appPages} logo={appLogo}/>

      <Suspense fallback={<div>loading...</div>}>
        <Routes>         
          {appPages.map((page, idx)=> {
            const Comp = pagesComps[page.comp];
            return (
              <Route
                key={page.comp + idx}
                path={page.href.path}
                element={<Comp
                  data={page.data}
                  pageOrder={idx}
                  {...(page.href.path === "/"? { websiteWorld, setWebsiteWorld}:{})}
                />}
              />
            )
          })}  
        </Routes> 
      </Suspense>  
 
    </ThemeProvider>
  )
}

export default App
