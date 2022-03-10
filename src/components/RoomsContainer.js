import {React, useContext} from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {RoomContext} from '../context';
import Loading from './Loading';

export default function RoomsContainer() {
const {rooms, sortedRooms, loading}= useContext(RoomContext);

// if (Loading==false){
// 	return <Loading />
// 	}

	return (
	<>
		<RoomsFilter rooms={rooms}/>
		<RoomsList rooms ={sortedRooms} />
	</>
	)
}