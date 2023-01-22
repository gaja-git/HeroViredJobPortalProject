import React from "react"
import Header from "./Header"
import MidSection from "./Midsection"
import Searchbox from "./Searchbox"
import Content from "./Content"
export default function JobCanvas(){
	return(
	<div> 
	<Header />
	<MidSection/>
	<Searchbox />
	<Content />
	</div>
	
	)
}