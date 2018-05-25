import React, { Component } from 'react';
import MovieRow from './MovieRow.js' 
import {fetchMovie} from './api/movieApi.js'
import logo from './assets/images/captain.svg';
import './assets/stylesheets/App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
 
  search = (query) => {
    if(query){
      fetchMovie(query).then(results => {
        let elements = results.map((element)=>{
          return {id: element.id, title: element.title, overview: element.overview, link: element.poster_path }
        })
        this.setState({movies: elements})
      })
    }
  }

  render() {
    let movies =  this.state.movies.map((movie,index) => <MovieRow key={movie.id} title={movie.title} overview={movie.overview} link={movie.link} />)
    return (
      <div className="App">
        <table className="title-bar">
          <tbody>
            <tr> 
              <td className ="icon-row"><img alt="movie" width="51" src={logo} /></td>
              <td><h1> Movies search </h1></td>
            </tr>
          </tbody>
        </table>
        <input className="input-search" placeholder="Enter search term" onChange={(event) => this.search(event.target.value)}  />
        {movies}
      </div>
    );
  }
}

export default App;
