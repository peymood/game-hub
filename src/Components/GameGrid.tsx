import React, { useEffect, useState } from 'react'
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
    const [eroors, seterrors] = useState('')

    useEffect(()=> {
        apiClient.get<FetchGamesRes>('./games')
        .then(res => setGames(res.data.results))
    })
    
  return (
    <div>GameGrid</div>
  )
}


export default GameGrid
    
    
    
    
