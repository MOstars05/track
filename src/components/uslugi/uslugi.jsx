import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { aksesuari, maslo, moyka, zapchast } from '../../assets'
import UslugiProp from './uslugiProp'

const Uslugi = () => {
  return (
    <Box className='wrapper'>
        <Box display={'flex'}  flexDirection={'column'}  gap={'50px'} flexWrap={'wrap'}>
          <Box display={'flex'} flexDirection={'column'} gap={'10px'} alignItems={'center'}>
            <Text fontWeight={'bold'} fontSize={{base: '25px', sm: '40px'}}>Любые услуги за ваши денишки</Text>
            <Text textAlign={'center'} fontSize={{base: '14px', sm:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br /> odio in et, lectus sit lorem id integer.</Text>
          </Box>
            <Box display={'flex'} justifyContent={'space-evenly'} flexWrap={'wrap'} gap={'10px'}>
                <UslugiProp h3={'Б/у запчасти для грузовых авто из Европы'} img={zapchast} />
                <UslugiProp h3={'Автомойка грузовых и легковых авто'} img={moyka} />
            </Box>
            <Box display={'flex'} justifyContent={'space-evenly '} flexWrap={'wrap'} gap={'10px'}>
                <UslugiProp h3={'Магазин аксессуаров'} img={aksesuari} />
                <UslugiProp h3={'Пункт замены масла легковых авто'} img={maslo} />
            </Box>
        </Box>
    </Box>
  )
}

export default Uslugi