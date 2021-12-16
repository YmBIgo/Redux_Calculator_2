import React from "react"
// for debugging
import {useDispatch, useSelector} from "react-redux"

const Result = ({result}) => {
	const calculators = useSelector(state => state.calculators)
	return (
		<div className="calculator-result">
			<span>
				{
				// RV : {calculators.resultValue}
				// <br />
				// IV : {calculators.inputValue}
				// <br />
				}
				{result}
			</span>
		</div>
	)
}

export default Result