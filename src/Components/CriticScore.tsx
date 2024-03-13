import { Badge } from "@chakra-ui/react";


interface Props {
    score : number; 

}

const CriticScore = ({score}: props) => {
    let color = score > 75 ? "green" : score > 60 ? "yellow" : "" 

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={1} >{score}</Badge>
  )
}

export default CriticScore