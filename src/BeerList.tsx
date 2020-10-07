
import * as React from 'react';


import Beer from './Beer';

interface Props {
  beers: String[];
}

export default class BeerList extends React.Component<Props> {
  static defaultProps: Props = {

    beers: ["despe", "chouffe"]
  };

  handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      this.addBeer();
    }
  }

  deleteBeer(beerIndex: number) {

    this.props.beers.splice(beerIndex, 1);
    this.forceUpdate()

  }

  addBeer() {
    let beerInput = document.getElementById("beer") as HTMLInputElement;

    if (beerInput.value !== "") {
      this.props.beers.push(beerInput.value);

      beerInput.value = "";

      this.forceUpdate()
    }
  }

  render() {
    return (
      <div className="w3-center">
        <h1>Liste des bières</h1>
        <ul className="w3-ul">
          {this.props.beers.map((item, index) => (

            <li>
              <div className="w3-container" key={index}>

                <Beer name={item} />
                <button className="w3-right w3-button w3-red w3-round w3-margin-left" onClick={(() => { this.deleteBeer(index) })}>&times;</button>

              </div>

            </li>

          ))}
        </ul>

        <h2>Ajouter une bière</h2>
        <div className="w3-container w3-center">
          <input onKeyDown={this.handleKeyDown} placeholder="Nom de la bière" className="w3-input w3-border" type="text" id="beer" />
          <button className="w3-button w3-green w3-round w3-margin-left w3-margin" onClick={(() => { this.addBeer() })}> Ajouter </button>
        </div>
      </div>
    );
  }
}
