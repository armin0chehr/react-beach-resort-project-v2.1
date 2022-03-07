import {React, useContext} from 'react';
import Title from './Title';
import {RoomContext} from '../context';
import RoomsList from './RoomsList';


export default function RoomsFilter() {

let {
	sortData,
	types,
	capacity,
	 }= useContext(RoomContext);
types =['all',...types]


const rooms = sortData();

console.log('types='+ types)
const changeHandler=(event)=>{
	console.log(event.target.value)
}


return (
<>
<section className="filter-container">
    <Title title='search rooms'/ >        
    <form className="filter-form">
        <div className="form-group">
            <label >room type</label>
            <select name="type" id="type" className="form-control" onChange={changeHandler}>
            {types.map((type,index)=>{
            	return <option key={index} value={`${type}`} >{type}</option>
            })}                
            </select>
        </div>
        <div className="form-group">
            <label >Guests</label>
            <select name="capacity" id="capacity" className="form-control">
            {capacity.map((gusts,index)=>{
            	return <option key={index} value={`${gusts}`} >{gusts}</option>
            })}         
            </select>
        </div>
        <div className="form-group"><label >Room Price $600</label><input type="range" name="price" id="price" min="0" max="600" className="form-control" value="600" onChange={changeHandler} /></div>
        <div className="form-group">
            <label >Room Size</label>
            <div className="size-inputs"><input type="text" name="minSize" id="minSize" className="size-input" value="0" onChange={changeHandler} /><input type="text" name="maxSize" id="maxSize" className="size-input" value="1000" onChange={changeHandler} /></div>
        </div>
        <div className="form-group">
            <div className="single-extra"><input type="checkbox" name="breakfast" id="breakfast" /><label >breakfast</label></div>
            <div className="single-extra"><input type="checkbox" name="pets" id="pets" /><label >pets</label></div>
        </div>
    </form>
</section>
<RoomsList rooms={rooms} />	
</>
)
}