import axios from "axios";

const Axios = axios.create({
    baseURL : 'https://api.rawg.io/api/games/{game_pk}/additions',
    params : {
        key : '187e110648c44fd99ea2d05d7ccc2164'
    }
})

export default Axios ; 

