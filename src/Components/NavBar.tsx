import { HStack, Img } from '@chakra-ui/react'
import logo from "../assets/1600w-aUTM8fRw1ho.webp"
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" >
        <Img src={logo} boxSize="100px" />

        <ColorModeSwitch /> 
      
    </HStack> 
  )
}

export default NavBar; 