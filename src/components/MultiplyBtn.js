import React from "react"

const MultiplyBtn = ({onClick}) => {
	return (
		<button className="calculator-button operator-btn" onClick={onClick}>
			x
		</button>
	)
}

export default MultiplyBtn