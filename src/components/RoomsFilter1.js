import {React, useContext} from 'react';
import Title from './Title';
import {RoomContext} from '../context';


export default function RoomsFilter(rooms) {

if (rooms.length ===0){
	return (
		<div> there is no room match </div>)
}

let {
	sortData,
	types,
	capacity,
	price,
	maxPrice,
	 }= rooms;

// types =['all',...types]



console.log('types='+ rooms)

function changeHandler(event){
	let id = event.target.id;
	let val = event.target.value
	 console.log( id+ ' ' +val)
sortData(id, val)

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
            <select name="capacity" id="capacity" className="form-control" onChange={changeHandler}>
            {capacity.map((gusts,index)=>{
            	return <option key={index} value={`${gusts}`} >{gusts}</option>
            })}         
            </select>
        </div>
        <div className="form-group">
	        <label >Room Price ${price}</label>
	        <input type="range" name="price" id="price" min="0" max={maxPrice} className="form-control" value={price} onChange={changeHandler} />
        </div>
        <div className="form-group">
            <label >Room Size</label>
            <div className="size-inputs">
            	<input type="text" name="minSize" id="minSize" className="size-input" value="0" onChange={changeHandler} /><input type="text" name="maxSize" id="maxSize" className="size-input" value="1000" onChange={changeHandler} />
            </div>
        </div>
        <div className="form-group">
            <div className="single-extra">
            	<input type="checkbox" name="breakfast" id="breakfast" />
            	<label >breakfast</label>
            </div>
            <div className="single-extra">
            	<input type="checkbox" name="pets" id="pets" />
            	<label >pets</label>
            </div>
        </div>
    </form>
</section>
</>
)
}