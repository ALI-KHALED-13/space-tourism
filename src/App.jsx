
import { Routes, Route, useLocation} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import SpaceHeader from './components/SpaceHeader'
import GlobalStyles, { colors } from './GlobalStyles';
import { Crew } from './pages/Crew';
import { Destination } from './pages/Destination';
import { Home } from './pages/Home';
import { Technology } from './pages/Technology';

/*
- to do:
 React lazy and suspnse
*/


function App() {
  const {pathname} = useLocation();
  
  return (
    <ThemeProvider theme={{colors}}>
      <GlobalStyles page={pathname === "/"? "home": pathname.slice(1)} />
  
      <SpaceHeader />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/destination" element={<Destination />}/>
        <Route path="/crew" element={<Crew />}/>
        <Route path="/technology" element={<Technology />}/>
      </Routes>  
 
    </ThemeProvider>
  )
}

export default App
