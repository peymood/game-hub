import {useState, useEffect} from 'react'
import apiClient from '../services/api-client';
import Axios from '../services/api-client'
import { CanceledError } from 'axios';

export interface Platform {
  id : number ;
  name : string ; 
  slug : string : 
}


export interface Game { 
  id : number; 
  name : string ; 
  background_image : string 
  parent_platforms : {Platform : Platform } []
}

interface FetchGamesRes {
  count : number; 
  results : Game[] 
}


const useGames = () => {
    const [games, setGames] = useState<Games[]>([])
    const [errors, setErrors] = useState('')

    useEffect(()=> {
      const controller = new AbortController() ;

        apiClient.get<FetchGamesRes>('./games', {signal : controller.signal})
        .then(res => setGames(res.data.results))
        .catch(err =>{
          
          if(err instanceof CanceledError ) return   
          setErrors(err.message)
        })

        return () => controller.abort() ; 
    }, [])
    return(
      {games , errors}
    )
 
export default useGames ;  
