import React from "react"

const NumBtn = ({number, onClick}) => {
	return(
		<button className="calculator-button num-btn" onClick={onClick}>
			{number}
		</button>
	)
}

export default NumBtn;