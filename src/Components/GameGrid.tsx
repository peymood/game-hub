import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react' 
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
const {games , errors, isLoading } = useGames(); 
  const skeletons = [1,2,3,4,,6] ;
   
  return (
    <>
    {errors && <Text>{errors}</Text>}
    <SimpleGrid column={{sm:1 ,md:2 ,lg:3 ,xl:4} } padding={10} spacing={10} >

      {isLoading && skeletons.map( (Skeleton) => <GameCardSkeleton key={Skeleton} /> )}
      {games.map((game) => 
        <GameCard key={game.id} game={game} /> 
    </SimpleGrid>
    </>
  )
}


export default GameGrid ; 
    
    
  

