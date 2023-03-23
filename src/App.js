import React from "react";
import Calculator from "./components/Calculator"

export default function App() {

  const [style, setStyle] = React.useState(false);
  const [cleaner, setCleaner] = React.useState(false);
  const [check, setCheck] = React.useState("");

  let calCulatorInput = 0;
  let result = 0;

  function getNumByKeyBoard(event) {

    if (cleaner === true) {
      document.getElementById("screen").value = ""
      setCleaner(false)
    }

    document.getElementById("screen").value += event.target.value
    calCulatorInput = document.getElementById("screen").value
  }

  function getOperatorByKeyBoard(event) {
    document.getElementById("screen").value += event.target.value
    calCulatorInput = document.getElementById("screen").value
    document.getElementById("screen").focus()
    setCleaner(false)
    setCheck(calCulatorInput)
  }

  function getNumByScreen(event) {
    calCulatorInput += event.target.value
  }

  function getResult() {
    document.getElementById("screen").focus()

    try {
      result = (eval(calCulatorInput))

      if (result === undefined) {
        result = check

        if (result !== result) {
          document.getElementById("screen").value = result
          setCleaner(false)
        }

      } else {
        document.getElementById("screen").value = result
        setCleaner(true)
      }
    }


    catch {
      document.getElementById("screen").value = "error"
      document.getElementById("screen").setAttribute("class", "error")

      setTimeout(() => {
        document.getElementById("screen").setAttribute("class", "display")
        document.getElementById("screen").value = calCulatorInput
      }, 1000)
    }
  }

  function calculatorStyle() {
    setStyle(!style)
  }

  function clear() {
    document.getElementById("screen").focus()
    document.getElementById("screen").value = ""
    calCulatorInput = ""
    result = ""
    setCheck(0)
  }

  function erase() {
    document.getElementById("screen").focus()
    document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1)
  }

  return (
    <div>
      <Calculator
        getNumByKeyBoard={getNumByKeyBoard}
        getNumByScreen={getNumByScreen}
        getOperatorByKeyBoard={getOperatorByKeyBoard}
        getResult={getResult}
        clear={clear}
        erase={erase}
        calculatorStyle={calculatorStyle}
        style={style}
      />
    </div>
  );
}

