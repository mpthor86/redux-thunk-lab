import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {
    return (
      <div className='App'>
        <h1>CatBook</h1>
        {/* add CatList component here */}
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const maptStateToProps = state => {
  return {
    catPics: state.cats,
    laoding: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(maptStateToProps, mapDispatchToProps)(App)

