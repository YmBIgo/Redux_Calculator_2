import {useDispatch, useSelector} from "react-redux"

import {onNumberClick, onPlusClick, onEqualClick, onMinusClick, onMultiplyClick, onDevideClick, onClearClick} from "./actions"

import NumBtn from "./components/NumBtn"
import PlusBtn from "./components/PlusBtn"
import MinusBtn from "./components/MinusBtn"
import EqualBtn from "./components/EqualBtn"
import MultiplyBtn from "./components/MultiplyBtn"
import DevideBtn from "./components/DevideBtn"
import ClearBtn from "./components/ClearBtn"
import Result from "./components/Result"

import './App.css';
import "./CSS/components.css"

function App() {

  const dispatch = useDispatch()
  const calculators = useSelector(state => state.calculators)

  return (
    <div className="App calculator-container">
      <div>
        <Result result={ calculators.is_showing_result ? calculators.resultValue : calculators.inputValue } />
      </div>
      <div>
        <NumBtn number={1} onClick={() => dispatch(onNumberClick(1)) } />
        <NumBtn number={2} onClick={() => dispatch(onNumberClick(2)) } />
        <NumBtn number={3} onClick={() => dispatch(onNumberClick(3)) } />
        <PlusBtn onClick={() => dispatch(onPlusClick())} />
      </div>
      <div>
        <NumBtn number={4} onClick={() => dispatch(onNumberClick(4)) } />
        <NumBtn number={5} onClick={() => dispatch(onNumberClick(5)) } />
        <NumBtn number={6} onClick={() => dispatch(onNumberClick(6)) } />
        <MinusBtn onClick={() => dispatch(onMinusClick()) } />
      </div>
      <div>
        <NumBtn number={7} onClick={() => dispatch(onNumberClick(7)) } />
        <NumBtn number={8} onClick={() => dispatch(onNumberClick(8)) } />
        <NumBtn number={9} onClick={() => dispatch(onNumberClick(9)) } />
        <MultiplyBtn onClick={() => dispatch(onMultiplyClick()) } />
      </div>
      <div>
        <NumBtn number={0} onClick={() => dispatch(onNumberClick(0)) } />
        <ClearBtn onClick={() => dispatch(onClearClick())} />
        <EqualBtn onClick={() => dispatch(onEqualClick())} />
        <DevideBtn onClick={() => dispatch(onDevideClick())} />
      </div>
    </div>
  );
}

export default App;
