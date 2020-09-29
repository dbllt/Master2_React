import React from 'react';
import './App.css';


interface Props {
  beers: String[];
}

export default class About extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1>Auteurs:</h1>
        <ul>
          <li>Dorian Bouillet</li>
          <li>Nils Richard</li>
        </ul>

      </div>
    );
  }
}
