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
    console.log('findPets was called from app.js')
      let api = ''
      if (this.state.filters.type === "all"){
        api = '/api/pets'//logs in tests, not browser
        console.log('calling all types of pets')
      } else if (this.state.filters.type === "cat"){
        api = '/api/pets?type=cat'
        console.log('calling all cats')//logs in tests, not browser
      } else if (this.state.filters.type === "dog"){
        api = '/api/pets?type=dog'
        console.log('calling all dogs')//logs in tests, not browser
      } else if (this.state.filters.type === "micropig"){
        api = '/api/pets?type=micropig'
        console.log('calling all micropigs')//logs in tests, not browser
      }

      console.log(`HEY!!!!!!!!!! this.state.filters.type is ${this.state.filters.type}`)
      //tests - shows type
      //browser -shows undefined


      fetch(`${api}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ pets: data })
        })
    }

  adoptPet = (id) => {
    console.log ('adoptPet callback prop just got called from app.js')
    let thisPet = this.state.pets.find((pet) =>
      pet.id === id)
    thisPet.isAdopted = true
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
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.adoptPet}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
