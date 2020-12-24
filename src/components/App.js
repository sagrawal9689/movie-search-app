import React from 'react'
import MovieList from './MovieList'
import SearchBar from './SearchBar'

class App extends React.Component {

  render()
  {
    return (
      <div className="App">
        <SearchBar/>
        <MovieList/>
      </div>
    )
  }
  
}

export default App;
