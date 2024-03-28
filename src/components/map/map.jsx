import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { map } from '../../assets'

const Map = () => {
  return (
    <Box mt={'70px'} ml={'10px'} mr={'10px'}>
        <Box display={'flex'}  flexWrap={'wrap'}>
            <Box pl={'50px'} pr={'50px'} mb={'50px'}  bg={'#F4F6FA'} width={{base: '550px', sm: '700px' , xl:'550px'}} height={'540px'} display={'flex'} flexDirection={'column'} gap={'20px'} justifyContent={'center'}>
                <Text fontWeight={'bold'} fontSize={{base: '25px', sm: '40px'}}>Где мы?</Text>
                <Text fontSize={{base: '14px', sm:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br /> odio in et, lectus sit lorem id integer.</Text>
                <Text fontSize={{base: '14px', sm:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br /> odio in et, lectus sit lorem id integer.</Text>
                <Text fontSize={{base: '14px', sm:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br /> odio in et, lectus sit lorem id integer.</Text>
            </Box>
            <Box >
                <Image src={map} />
            </Box>
        </Box>
    </Box>
  )
}

export default Map