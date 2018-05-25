import React, { Component } from 'react';
import Spinner from 'react-spinkit'
import placeholder from './assets/images/placeholder.png';


class movieRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table> 
      	<tbody>
	      	<tr>
	      		<td className="movieImage">
	      			<img className="moviePoster" alt="movie_poster" width="120" height="180" src={this.props.link ? `${process.env.REACT_APP_API_URL_BASE_LINK}${this.props.link}` : placeholder} />
	      		</td>
	      		<td className="movieDetails">
	      			<h4>{this.props.title}</h4>
	      		
	      			<p>{this.props.overview}</p>
	      		</td>

	      	</tr>
      	</tbody>
      </table>
    );
  }
}

export default movieRow;