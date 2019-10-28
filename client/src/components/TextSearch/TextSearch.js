import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchText } from '../../actions/searchActions'
import './TextSearch.css'

class TextSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''      
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })    
  }
  onSubmit(e) {
    e.preventDefault()
    const text = {
      searchText: this.state.searchText      
    }
    this.props.searchText(text,()=>this.props.history.push('/search'))
    
  }
  render() {
    return (
      <div className='search-text'>

            <br/>
            <h1>Search Itunes</h1>
            <br/>
              <form onSubmit={this.onSubmit}>
                <div>                  
                  <input
                    placeholder='Insert here song name, album etc..'
                    type="text"
                    name="searchText"
                    onChange={this.onChange}
                    value={this.state.searchText}
                  />
                </div>                
                <button type="submit"><h1>Search</h1></button>
              </form>            
      </div>
    )
  }
}
TextSearch.propTypes = {
  searchText: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    results: state.results    
})
export default connect(mapStateToProps, { searchText })(TextSearch)