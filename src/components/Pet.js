import React from 'react'

class Pet extends React.Component {

//this.props.pet

  render() {

    //choose which button to display adopt pet OR already adopted
    const isAdopted = this.props.pet.isAdopted;
    let button;

    if (isAdopted === true) {
      button = <button className="ui disabled button">Already adopted</button>
    } else {
      button =
        <button
          className="ui primary button"
          id={this.props.pet.id}
          onClick={()=> this.props.onAdoptPet(this.props.pet.id)}
          >Adopt pet</button>
    }


    //show gender symbol
    let symbol;
    this.props.pet.gender === "female" ? symbol = '♀' :  symbol =  '♂'

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {symbol}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content" id={this.props.pet.id}>
        {button}
        </div>
      </div>
    )
  }
}

export default Pet
