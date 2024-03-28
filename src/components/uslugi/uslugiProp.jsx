import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { zapchast } from '../../assets'

const UslugiProp = ({img, h3}) => {
  return (
    <Box bgColor={'#F4F6FA'} width={{base: '200px' , sm:'555px'}} pt={'20px'} pb={'20px'} pl={'30px'} rounded={'9px'}>
        <Box  display={'flex'} alignItems={'center'} flexWrap={'wrap'} >
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Text fontWeight={'bold'} fontSize={{base: '15', sm: '20px'}} >{h3}</Text>
                <Text width={{base: '150px', sm:'200px'}} fontSize={{base: '10px', sm:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</Text>
            </Box>
            <Box bgColor={'#F4F6FA'} >
                <Image src={img} />
            </Box>
        </Box>
    </Box>
  )
}

export default UslugiProp