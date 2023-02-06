import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import SpaceHeader from './components/SpaceHeader'
import { colors } from './GlobalStyles';
import { Crew } from './pages/Crew';
import { Destination } from './pages/Destination';
import { Home } from './pages/Home';
import { Technology } from './pages/Technology';

/*
- to do:
 React lazy and suspnse
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={{colors}}>
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
