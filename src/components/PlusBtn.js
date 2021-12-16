import React from "react"

const PlusBtn = ({onClick}) => {
	return (
		<button className="calculator-button operator-btn" onClick={onClick}>
			+
		</button>
	)
}

export default PlusBtn;