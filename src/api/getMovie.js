import axios from 'axios'

const getMovies=async (movieName)=>{

    const movies= await axios.get('https://imdb8.p.rapidapi.com/title/auto-complete',
    {
        headers:{
            "x-rapidapi-key" : "3c4d804669msh5a389bd9c3d1bf7p16bd2bjsn7871bffa1d2a",
	        "x-rapidapi-host" : "imdb8.p.rapidapi.com",
	        useQueryString : true
        },
        params:{
            q: movieName
        }
    })    
   
    return movies.data.d
}


export default getMovies