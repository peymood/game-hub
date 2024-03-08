import React, { useEffect, useState} from 'react'
import { Text } from '@chakra-ui/react' 
import apiClient from '../services/api-client'

interface Games { 
    id : number; 
    name : string
}

interface FetchGamesRes {
    count : number; 
    results : Games[] 
}

const GameGrid = () => {
    const [games, setGames] = useState<Games[]>([])
    const [errors, setErrors] = useState('')

    useEffect(()=> {
        apiClient.get<FetchGamesRes>('./xgames')
        .then(res => setGames(res.data.results))
        .catch(err => setErrors(err.message))
    })
    
  return (
    <>
    {errors && <Text>{errors}</Text>}
    <ul>
      {games.map((game) => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
}


export default GameGrid
    
    
    
    
