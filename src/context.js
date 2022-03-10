import React from 'react';
import items from "./data";

const RoomContext = React.createContext();
export default class RoomProvider extends React.Component {
state ={
  rooms: [],
  sortedRooms:[],
  featuredRooms:[],
  loading: true,
  type:'all',
  capacity:1,
  price:0,
  minPrice:0,
  maxPrice:0,
  minSize:0,
  maxSize:0
 }

componentDidMount(){
let rooms = this.formatData(items);
let featuredRooms = rooms.filter((room)=> room.featured=== true);
let maxPrice = Math.max(...rooms.map((room)=>room.price));
let maxSize = Math.max(...rooms.map((room)=>room.size));

this.setState({
rooms,
sortedRooms:rooms,
featuredRooms,
loading:false,
price:maxPrice,
maxPrice,
maxSize
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
} //end of get room

// sort room by filterRoom items
handelChange = (event) =>{

  const target = event.target;
  const value = target.type ==='checkbox' ? target.checked: target.value ;
  const name = event.target.name;

console.log(name,value)

  this.setState(
  {
  [name]:value
  },
  this.filterRooms
  )

}

filterRooms=()=>{
let {
  rooms,
  type,
  capacity,
  price,
  minPrice,
  maxPrice,
  minSize,
  maxSize
 } = this.state;
let tempRooms = [...rooms];
 if (type !== 'all'){
tempRooms= tempRooms.filter((room)=>room.type==type)
 }
tempRooms= tempRooms.filter((room)=>room.capacity >=capacity)
tempRooms= tempRooms.filter((room)=>room.price >=price)
  console.log(tempRooms)
  this.setState({
    sortedRooms:tempRooms
  })
}


  render() {
    return (
      <RoomContext.Provider 
      value={{
        ...this.state,
        getRoom:this.getRoom,
        handelChange: this.handelChange
      }} >
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
