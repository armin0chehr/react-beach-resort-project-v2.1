import {React, useContext } from 'react'
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context";
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import defaultImg from "../images/room-1.jpeg";

export default function SingleRoom(props) {
const {getRoom}= useContext (RoomContext)
let {slug } = useParams();
const room = getRoom(slug);

if (!room){
	return(
		<div className='error' >there is no room
			<Link to='/rooms/' className="btn-primary" >Back to Rooms</Link>			
		</div>
	)};

const {
	name,
	images,
	description,
	price,
	size,
	capacity,
	maxCap,
	pets,
	extras } = room

const pet = pets ? 'Pets Not allowed': 'Pets allowed'

// header dynamic style
const singleStyle ={
  minHeight: '60vh',
  backgroundImage : `url(${(images[0] ? images[0] : defaultImg)})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

return (
	<>
	<header style={singleStyle}>
		<Banner 
			title={`${name} Rooms`}
			subtitle="Deluxe Rooms Starting At $299"
			>			
			<Link to='/rooms/' className="btn-primary" >Back to Rooms</Link>			
		</Banner>			
	</header>
	<section className='single-room'>
		<div className='single-room-images'>
		{images.map((image,index)=>{
			return<img key ={index} src={image}/>
		})}
		</div>
		<div className='single-room-info'>
			<article className='desc'>
				<h3>details</h3>
				<p>{description}</p>
			</article>
			<article className='info'>
				<h3>info</h3>
				<h6>Price : ${price} </h6>
				<h6>Size : {size} SQFD </h6>
				<h6>Max Capacity : {capacity} person </h6>
				<h6>{pet}</h6>			
			</article>			
		</div>
        <section className="room-extras">
        	<h6>extras </h6>
          <ul className="extras">
          {extras.map((exta,index)=>{
          	return <li key = {index}>{exta}</li>
          })}
          </ul>
        </section>
	</section>
	</>
)
} 