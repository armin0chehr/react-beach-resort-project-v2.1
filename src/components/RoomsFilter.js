import {React, useContext} from 'react';
import Title from './Title';
import {RoomContext} from '../context';


export default function RoomsFilter({rooms}) {
	const value = useContext(RoomContext);
	const getUniqu =(items, val)=>{
	return [...new Set(items.map((room)=>room[val]))];
	}
let {
  handelChange,
  type,
  capacity,
  price,
  minPrice,
  maxPrice,
  minSize,
  maxSize
 }=value;
//type
type = getUniqu (rooms,'type');
type=['all', ...type];
type = type.map((type,index)=>{
    return <option key={index} value={`${type}`} >{type}</option>
})

//capacity
capacity = getUniqu (rooms,'capacity');
capacity = capacity.map((capacity,index)=>{
    return <option key={index} value={`${capacity}`} >{capacity}</option>
})


return (
<>
<section className="filter-container">
    <Title title='search rooms'/ >
    <form className="filter-form">
        <div className="form-group">
        	<label >room type</label>
            <select 
            	name="type"
            	id="type"
            	className="form-control"
            	onChange={handelChange}>
            {type}                
            </select>
        </div>
        <div className="form-group">
         	<label >Guests</label>
            <select
            name="capacity"
            id="capacity" 
            className="form-control"
            onChange={handelChange}>
            {capacity}
            </select>            
        </div>
        <div className="form-group">
         	<label >Room Price ${price}</label>
         	<input 
         	type="range" 
         	name="price" 
         	id="price" 
         	min={minPrice} 
         	max={maxPrice} 
         	className="form-control" 
            onChange={handelChange}
         	value={price}/>           
        </div>

    </form>	        
    
</section>
</>
)
}