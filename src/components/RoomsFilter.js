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
  size,
  minSize,
  maxSize,
  breakfast,
  pets
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
        	<label htmlFor="type" >room type</label>
            <select 
            	name="type"
            	id="type"
            	className="form-control"
            	onChange={handelChange}>
            {type}                
            </select>
        </div>
        <div className="form-group">
         	<label htmlFor="capacity" >Guests</label>
            <select
            name="capacity"
            id="capacity" 
            className="form-control"
            onChange={handelChange}>
            {capacity}
            </select>            
        </div>
        <div className="form-group">
         	<label htmlFor='price'>Room Price ${price}</label>
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
        <div className="form-group">
        	<label htmlFor="size">Room Size</label>
        	<div className="size-inputs">
        	<input type="text" name="minSize" id="minSize" className="size-input" value={minSize} onChange={handelChange} />
        	<input type="text" name="maxSize" id="maxSize" className="size-input" value={maxSize} onChange={handelChange} />
        	</div>
        </div>
        <div className="form-group">
	        <div className="single-extra">
		        <input type="checkbox" 
		        name="breakfast" 
		        id="breakfast"
		        checked={breakfast}
		        onChange={handelChange}/>
		        <label htmlFor="breakfast">breakfast</label>
	        </div>
	        <div className="single-extra">
		        <input type="checkbox" 
		        name="pets" 
		        id="pets"
		        checked={pets}
		        onChange={handelChange}/>
		        <label htmlFor="pets">pets</label>
		        </div>
		    </div>

    </form>	        
    
</section>
</>
)
}