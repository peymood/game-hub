import { Card, CardBody, Heading, Image, Img, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList';

interface props {
    game: Game ; 

}
const GameCard = ({game} : props) => {


  return (
    <Card borderRadius={20} overflow={'hidden'} >
        <CardBody>
        <Image src= {game.background_image} />
        <Heading>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.Platform)}  />
        </CardBody>
    </Card>
  )
}

export default GameCard