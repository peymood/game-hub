import { HStack, Img, Text } from '@chakra-ui/react'
import logo from "../assets/1600w-aUTM8fRw1ho.webp"

const NavBar = () => {
  return (
    <HStack>
        <Img src={logo} boxSize="100px" />
        <Text> Nav Bar</Text>
    </HStack> 
  )
}

export default NavBar