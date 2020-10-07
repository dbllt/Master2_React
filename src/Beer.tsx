import * as React from 'react';

interface Props {
  name: String;
}



export default class Beer extends React.Component<Props> {
  render() {
    return <span>{this.props.name}</span>;
  }
}
