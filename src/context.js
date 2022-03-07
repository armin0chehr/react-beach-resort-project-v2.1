import React from 'react';
import items from "./data";

const RoomContext = React.createContext();
export default class RoomProvider extends React.Component {
state ={
  rooms: [],
  sortedRooms:[],
  featuredRooms:[],
  loading: true,
  types:[],
  capacity:[]
 }

componentDidMount(){
let rooms = this.formatData(items);
let featuredRooms = rooms.filter((room)=> room.featured=== true);
let types = [...new Set(rooms.map((room)=>room.type))];
let capacity = [...new Set(rooms.map((room)=>room.capacity))];

this.setState({
rooms,
featuredRooms,
loading:false,
types,
capacity
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

// find room by slug
getRoom =(slug)=>{
  let tempRooms = [...this.state.rooms];
  let room =tempRooms.find((room)=>room.slug === slug )
  // console.log("Room = " + room)

  return room;
}
// sort room by filterRoom items

sortData =()=>{
    let tempRooms = [...this.state.rooms];

    console.log(tempRooms)
  return tempRooms;
}




  render() {
    return (
      <RoomContext.Provider 
      value={{
        ...this.state,
        getRoom:this.getRoom,
        sortData: this.sortData
      }} >
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
