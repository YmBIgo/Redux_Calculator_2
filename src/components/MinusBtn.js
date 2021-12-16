import React from "react"

const MinusBtn = ({onClick}) => {
	return (
		<button className="calculator-button operator-btn" onClick={onClick}>
			-
		</button>
	)
}

export default MinusBtn;