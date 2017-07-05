import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJoke } from '../actions/jokes';

class DisplayJoke extends Component {
  componentWillMount() {
    this.props.fetchJoke();
  }

  render() {
    const renderJoke = () => {
      if(this.props.loading) {
        return (<h3> Loading... </h3>);
      } else if (this.props.error) {
        return (<h3 style={{'color': 'red'}}>Oooops! There is an error here, only Chuck Norris can compile syntax errors.</h3>)
      }

      return (<h3> { this.props.joke } </h3>);
    } 
    return(
      <div>
        <h1> Chuck Norris joke: </h1>
        {renderJoke()}
        <h5>Refresh your browser to read another one</h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { value, loading, error } = state.joke;
  return { joke: value, loading, error };
};

export default connect(mapStateToProps,{ fetchJoke })(DisplayJoke);