
import * as React from 'react';


import Beer from './Beer';

interface Props {
  beers: String[];
}

export default class BeerList extends React.Component<Props> {
  static defaultProps: Props = {

    beers: ["despe", "chouffe"]
  };

  deleteBeer(beerIndex: number) {

    this.props.beers.splice(beerIndex, 1);
    this.forceUpdate()

  }


  addBeer() {
    var beer = (document.getElementById("beer") as HTMLInputElement).value;
    if (beer !== "") {
      this.props.beers.push(beer);

      this.forceUpdate()
    }
  }


  render() {
    return (
      <div>
        <h1>Les bières</h1>
        <ul>
          {this.props.beers.map((item, index) => (
            <span key={index}>
              <Beer name={item} />
              <button onClick={(() => {
                this.deleteBeer(index)
              })}>X</button>
            </span>
          ))}
        </ul>

        <input type="text" id="beer" ></input>
        <button onClick={(() => {
          this.addBeer()
        })}> Add beer</button>
      </div>
    );
  }
}
