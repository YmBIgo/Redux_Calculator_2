import {NUM_INPUT, PLUS, MINUS, MULTIPLY, DEVIDE, CLEAR, EQUAL} from "../actions"

const initialState = {
	inputValue: 0,
	resultValue: 0,
	is_showing_result: false,
	operator: "",
}

const calculators = (state = initialState, action) => {
	switch(action.type){
		case NUM_INPUT:
			// . を実装していない、、、
			if (Number.isInteger(state.inputValue) == true){
				return {
					...state,
					inputValue: state.inputValue * 10 + action.number,
					is_showing_result: false
				}
			} else if (state.operator == ".") {
				let pointLength = String(state.inputValue).split(".")[1].length + 1
				let pointLengthDevide = 10 ** pointLength
				return {
					...state,
					inputValue: state.inputValue + action.number / pointLengthDevide,
					is_showing_result: false
				}
			} else {
				return {
					...state,
					inputValue: 0,
					resultValue: state.inputValue,
					is_showing_result: false
				}
			}
		case PLUS:
			if (state.operator == "") {
				return {
					...state,
					resultValue: state.inputValue,
					inputValue: 0,
					operator: "+",
					is_showing_result: true
				}
			} else if (state.operator == "="){
				return {
					...state,
					inputValue: 0,
					operator: "+",
					is_showing_result: true
				}
			} else {
				return {
					...state,
					inputValue: 0,
					resultValue: state.resultValue + state.inputValue,
					operator: "+",
					is_showing_result: true
				}
			}
		case MINUS:
			if (state.operator == "") {
				return {
					...state,
					resultValue: state.inputValue,
					inputValue: 0,
					operator: "-",
					is_showing_result: true
				}
			} else if (state.operator == "=") {
				return {
					...state,
					inputValue: 0,
					operator: "-",
					is_showing_result: true
				}
			} else {
				return {
					...state,
					inputValue: 0,
					resultValue: state.resultValue - state.inputValue,
					operator: "-",
					is_showing_result: true
				}
			}
		case MULTIPLY:
			if (state.operator == "") {
				return {
					...state,
					inputValue: 0,
					resultValue: state.inputValue,
					operator: "*",
					is_showing_result: true
				}
			} else if (state.operator == "=") {
				return {
					...state,
					inputValue: 0,
					operator: "*",
					is_showing_result: true
				}
			} else {
				return {
					...state,
					inputValue: 0,
					resultValue: state.resultValue * state.inputValue,
					operator: "*",
					is_showing_result: true
				}
			}
		case DEVIDE:
			if (state.operator == "") {
				return {
					...state,
					inputValue: 0,
					resultValue: state.inputValue,
					operator: "/",
					is_showing_result: true
				}
			} else if (state.operator == "=") {
				return {
					...state,
					inputValue: 0,
					operator: "/",
					is_showing_result: true
				}
			} else {
				return {
					...state,
					inputValue: 0,
					resultValue: state.resultValue / state.inputValue,
					operator: "/",
					is_showing_result: true
				}
			}
		case CLEAR:
			return {
				...state,
				resultValue: 0,
				inputValue: 0,
				operator: "",
				is_showing_result: false
			}
		case EQUAL:
			if (state.operator == "+") {
				return {
					...state,
					resultValue: state.resultValue + state.inputValue,
					inputValue: 0,
					is_showing_result: true,
					operator: "="
				}
			} else if (state.operator == "-") {
				return {
					...state,
					resultValue: state.resultValue - state.inputValue,
					inputValue: 0,
					is_showing_result: true,
					operator: "="
				}
			} else if (state.operator == "*") {
				return {
					...state,
					resultValue: state.resultValue * state.inputValue,
					inputValue: 0,
					is_showing_result: true,
					operator: "="
				}
			} else if (state.operator == "/") {
				return {
					...state,
					resultValue: state.resultValue / state.inputValue,
					inputValue: 0,
					is_showing_result: true,
					operator: "="
				}
			} else {
				return {
					...state,
					inputValue: 0,
					is_showing_result: true,
					operator: "="
				}
			}
		default:
			return state
	}
}

export default calculators;