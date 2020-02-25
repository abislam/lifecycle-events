import React from "react"

function Box(){

	const boxStyle = {
		height: 100,
		width: 100,
		backgroundColor: "black",
		borderStyle: "solid",
		borderColor: "white"
	}

	return(
		<div style={boxStyle}>Box</div>
	)
	
}


export default Box;
