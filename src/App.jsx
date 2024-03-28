import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Fotki from './components/fotki/fotki'
import Map from './components/map/map'
import Navbar from './components/navbar/navbar'
import Service from './components/service/service'
import Uslugi from './components/uslugi/uslugi'
import Bgimg from './components/bgimg/bgimg'
import Vapros from './components/vapros/vapros'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <Box>
      <Box>
        <Box> 
          <Navbar />
        </Box>
        <Box>
          <Service />
        </Box>
        <Box>
          <Uslugi />
        </Box>
        <Box>
          <Vapros />
        </Box>
        <Box>
          <Map />
        </Box>
        <Box>
          <Fotki />
        </Box>
        <Box>
          <Bgimg />
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default App