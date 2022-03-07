import {React, useContext} from 'react';
import Room from './Room'

export default function RoomsList({rooms}) {


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