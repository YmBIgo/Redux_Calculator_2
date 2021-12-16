import React from "react"

const DevideBtn = ({onClick}) => {
	return (
		<button onClick={onClick} className="calculator-button operator-btn">
			÷
		</button>
	)
}

export default DevideBtn;