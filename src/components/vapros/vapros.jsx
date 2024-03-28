import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { daf, man, renault, scania, valvo } from '../../assets'

const Vapros = () => {
  return (
    <Box className='wrapper' ml={'10px'}>
        <Box mt={'100px'} display={'flex'} justifyContent={"space-between"} alignItems={'center'} flexWrap={'wrap'} >
            <Box display={'flex'} flexDirection={'column'} gap={'15px'}>
                <Text fontWeight={'bold'} fontSize={{base: '25px', sm:'40px'}}>У вас вопрос кто мы а <br /> кто мы блин</Text>
                <Text fontSize={{base: '14px', sm:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio <br /> in et, lectus sit lorem id integer.</Text>
                <Text fontSize={{base: '14px', sm:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio <br /> in et, lectus sit lorem id integer.</Text>
                <Text fontSize={{base: '14px', sm:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio <br /> in et, lectus sit lorem id integer.</Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'30px'} alignItems={{base: 'start', md:'center'}} pt={'50px'}>
                <Box display={'flex'} gap={'200px'} alignItems={'center'} flexWrap={'wrap'}>
                    <Box>
                        <Image src={scania} />
                    </Box>
                    <Box>
                        <Image src={valvo} />
                    </Box>
                </Box>
                <Box pt={'70px'} pb={'70px'}>
                    <Image src={man} />
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={'200px'} flexWrap={'wrap'}>
                    <Box>
                        <Image src={daf} />
                    </Box>
                    <Box>
                        <Image src={renault} />
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Vapros