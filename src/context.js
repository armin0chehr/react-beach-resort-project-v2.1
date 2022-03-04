import React from 'react';
import items from "./data";

const RoomContext = React.createContext();
export default class RoomProvider extends React.Component {
state ={
  rooms: [],
  sortedRooms:[],
  featuredRooms:[],
  loading: true
 }

componentDidMount(){
let rooms = this.formatData(items);
let featuredRooms = rooms.filter((room)=> room.featured=== true);

//console.log({rooms});

this.setState({
  rooms,
featuredRooms,
loading:false
  })
}
// import data from data.js
formatData(items){
  let tempItems = items.map((item) =>{
    let id = item.sys.id;
    let images = item.fields.images.map((image)=>image.fields.file.url);    
    let room = {...item.fields, images, id}
  return room;
  } )
  return tempItems
}

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
