import { Card, CardBody, HStack, Heading, Image, Img, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface props {
    game: Game ; 

}
const GameCard = ({game} : props) => {


  return (
    <Card borderRadius={20} overflow={'hidden'} >
        <CardBody>
        <Image src= {game.background_image} />
        <Heading>{game.name}</Heading>
        <HStack justifyContent="space-between" >
        <PlatformIconList platforms={game.parent_platforms.map(p => p.Platform)}  />
        <CriticScore score={game.metacritic} />
        </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard