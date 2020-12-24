import React from 'react'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import getMovie from '../api/getMovie'

class App extends React.Component {

  constructor()
  {
    super()
    this.state={
      movies: []
    }
  }

  handleFormSubmit=async (searchTerm)=>
  {
      const newMovies=  await getMovie(searchTerm)

      this.setState({ movies: newMovies })
  }

  render()
  {
    return (
      <div className="App">
        <SearchBar onFormSubmit={ this.handleFormSubmit }/>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
  
}

export default App;
