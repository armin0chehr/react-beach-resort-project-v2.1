import React from 'react'
import loading from '../images/gif/loading-arrow.gif'
export default function Loading() {
	return (
		<div className='loading'>
			<p>Loading ... </p>
			<img src={loading} alt = 'loading' />
		</div>
		
	)
}