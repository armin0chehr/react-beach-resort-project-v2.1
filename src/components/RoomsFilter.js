import {React, useContext} from 'react';
import Title from './Title';
import {RoomContext} from '../context';


export default function RoomsFilter({rooms}) {
	const value = useContext(RoomContext);
let {
  handelChange,
  type,
  capacity,
  minPrice,
  maxPrice,
  minSize,
  maxSize
 }=value;
const getUniqu =(items, val)=>{
return [...new Set(items.map((room)=>room[val]))];
}

type = getUniqu (rooms,'type');
type=['all', ...type]

// console.log( type)

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
            {type.map((type,index)=>{
            	return <option key={index} value={`${type}`} >{type}</option>
            })}                
            </select>
            
        </div>

    </form>	        
    
</section>
</>
)
}