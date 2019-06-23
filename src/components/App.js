import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.type.value
      }
    })
  }

  findPets = (event) => {
      let api = ''
      if (this.state.filters.type === "all"){
        api = '/api/pets'
      } else if (this.state.filters.type === "cat"){
        api = '/api/pets?type=cat'
      } else if (this.state.filters.type === "dog"){
        api = '/api/pets?type=dog'
      } else if (this.state.filters.type === "micropig"){
        api = '/api/pets?type=micropig'
      }

      fetch(`${api}`)
        .then(response => response.json())
        .then(data => this.setState({ pets: data }))
    }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.changeType}
                onFindPetsClick={this.findPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
