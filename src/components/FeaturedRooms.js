import React from 'react'
import {RoomContext} from '../context'
import Title from './Title'
import Loading from './Loading'
import Room from './Room'

export default class FeaturedRooms extends React.Component {
static contextType = RoomContext;

render() {
	const {featuredRooms : rooms , loading}=(this.context)
	const room = rooms.map((room)=>{
		return <Room key={room.id} room= {room}/>
	})

	console.log (rooms)


return (
	<section className= 'featured-rooms'>
	<Title title='Featured Rooms'/>
	<div className='featured-rooms-center'>

	{loading ? <Loading/> : room }
	</div>
	</section >
	)
	}
}