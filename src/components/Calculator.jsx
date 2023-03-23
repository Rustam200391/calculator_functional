import React, {useState} from "react";
import {CSSTransition} from 'react-transition-group';
import {Form} from 'react-final-form'

import '../style.css'

export default function Calculator(
    {
    style,
    getNumByScreen,
    getNumByKeyBoard,
    getOperatorByKeyBoard,
    getResult,
    erase })

    {
    
    const [show, setShow] = useState(false)
   
    return (
        

        <CSSTransition 
            in={true}
            classNames='example' 
            timeout={300} 
            unmountOnExit
        >
          
       
        <div className={style ? "container" : "container-dark"} >

            <h3 onClick={() => setShow(!show)}>{show ? 'Show': 'Hide'}count</h3>
            <input
                id="screen"
                className={style ? "display" : "display-dark"}
                onChange={(event) => getNumByScreen(event)}>
            </input>

            <div className="keysContainer">

                <div className="num">


                    <button
                        className={style ? "button" : "button-dark"}
                        value="7"
                        onClick={(event) => getNumByKeyBoard(event)}>7</button>

                    <button
                        className={style ? "button" : "button-dark"}
                        value="8"
                        onClick={(event) => getNumByKeyBoard(event)}>8</button>

                    <button
                        className={style ? "button" : "button-dark"}
                        value="9"
                        onClick={(event) => getNumByKeyBoard(event)}>9</button>

                    <button
                        className={style ? "button" : "button-dark"}
                        value="4"
                        onClick={(event) => getNumByKeyBoard(event)}>4</button>

                    <button
                        className={style ? "button" : "button-dark"}
                        value="5"
                        onClick={(event) => getNumByKeyBoard(event)}>5</button>

                    <button
                        className={style ? "button" : "button-dark"}
                        value="6"
                        onClick={(event) => getNumByKeyBoard(event)}>6</button>

                    <button
                        className={style ? "button" : "button-dark"}
                        value="1"
                        onClick={(event) => getNumByKeyBoard(event)}>1</button>

                    <button
                        className={style ? "button" : "button-dark"}
                        value="2"
                        onClick={(event) => getNumByKeyBoard(event)}>2</button>

                    <button
                        className={style ? "button" : "button-dark"}
                        value="3"
                        onClick={(event) => getNumByKeyBoard(event)}>3</button>
                    <button
                        className={style ? "buttonCero" : "buttonCero-dark"}
                        value="0"
                        onClick={(event) => getNumByKeyBoard(event)}>0</button>
                    <button
                        className={style ? "button" : "button-dark"}
                        value="."
                        onClick={(event) => getNumByKeyBoard(event)}>.</button>

                    <button
                        className={style ? "buttonOperator" : "buttonOperator-dark-equivalent"}
                        onClick={getResult}>=</button>

                </div>

    
                <div className="operators">

                    <button
                        className={style ? "buttonOperator" : "buttonOperator-dark"}
                        value="*"
                        onClick={(event) => getOperatorByKeyBoard(event)}>×</button>

                    <button
                        value="/"
                        className={style ? "buttonOperator" : "buttonOperator-dark"}
                        onClick={(event) => getOperatorByKeyBoard(event)}>÷</button>

                    <button
                        value="+"
                        className={style ? "buttonOperator" : "buttonOperator-dark"}
                        onClick={(event) => getOperatorByKeyBoard(event)}>+</button>

                    <button
                        value="-"
                        className={style ? "buttonOperator" : "buttonOperator-dark"}
                        onClick={(event) => getOperatorByKeyBoard(event)}>−</button>
                    <button
                        className={style ? "buttonC" : "buttonC-dark"}
                        onClick={erase}>C</button>

                </div>
              
            </div>
        </div>
        
        </CSSTransition>
    );
}
