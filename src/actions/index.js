export const NUM_INPUT = "NUM_INPUT"
export const PLUS = "PLUS"
export const MINUS = "MINUS"
export const MULTIPLY = "MULTIPLY"
export const DEVIDE = "DEVIDE"
export const EQUAL = "EQUAL"
export const CLEAR = "CLEAR"

export const onNumberClick = (number) => {
	return {
		type: NUM_INPUT,
		number: number
	}
}

export const onPlusClick = () => {
	return {
		type: PLUS,
	}
}

export const onMinusClick = () => {
	return {
		type: MINUS,
	}
}

export const onMultiplyClick = () => {
	return {
		type: MULTIPLY
	}
}

export const onDevideClick = () => {
	return {
		type: DEVIDE
	}
}

export const onClearClick = () => {
	return {
		type: CLEAR,
	}
}

export const onEqualClick = () => {
	return {
		type: EQUAL
	}
}