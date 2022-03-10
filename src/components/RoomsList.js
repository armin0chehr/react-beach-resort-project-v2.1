import {React, useContext} from 'react';
import Room from './Room'

export default function RoomsList({rooms}) {

if (rooms.length ===0){
	return (
		<div className='empty-search'> 
			<h3>there is no room match </h3>
		</div>
	)
}

rooms = rooms.map((room)=>{
		return <Room key={room.id} room= {room}/>
		console.log(room.id)
	})

return (
<section className="roomslist">
    <div className="roomslist-center">        
	{rooms}
    </div>
</section>
)
}