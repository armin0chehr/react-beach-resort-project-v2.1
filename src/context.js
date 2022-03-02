import React from 'react';
import items from "./data";

const RoomContext = React.createContext();
export default class RoomProvider extends React.Component {
state ={n:'hello', m:'word' }

  render() {
    return (
      <RoomContext.Provider value={{...this.state}} >
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
