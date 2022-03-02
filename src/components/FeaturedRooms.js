import React from 'react'
import {RoomContext} from '../context'

export default class FeaturedRooms extends React.Component {
static contextType = RoomContext;

	render() {

		console.log (this.context)
		return (
			<div>
				this is FeaturedRooms {this.context.n}
			</div>
		)
	}
}