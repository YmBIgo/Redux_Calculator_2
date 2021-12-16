import React from "react"

const ClearBtn = ({onClick}) => {
	return(
		<button className="calculator-button" onClick={onClick}>
			C
		</button>
	)
}

export default ClearBtn;