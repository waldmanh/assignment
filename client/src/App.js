import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import SearchBar from './components/SearchBar'
import Results from './components/Results'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <SearchBar/>            
            <Results />
        </div>
      </Provider>
    )
  }
}
export default App
