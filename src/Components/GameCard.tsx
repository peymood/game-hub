import { Card, CardBody, Heading, Image, Img } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'

interface props {
    game: Game ; 

}
const GameCard = ({game} : props) => {


  return (
    <Card borderRadius={20} overflow={'hidden'} >
        <CardBody>
        <Image src= {game.background_image} />
        <Heading>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard