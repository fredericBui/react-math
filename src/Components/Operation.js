import './Operation.css';
import { useState } from "react";

function Operation(props){

    let [nombre1, updateNombre1] = useState(0);
    let [nombre2, updateNombre2] = useState(0);
    let [resultat, updateResultat] = useState(0);

    function nb1Handler(event){
        console.log(event.target.value);
        updateNombre1(event.target.value);
    }
      
    function nb2Handler(event){
        console.log(event.target.value);
        updateNombre2(event.target.value);
    }

    function calcul(){
        switch (props.operator){
            case '+' :
                updateResultat(parseFloat(nombre1) + parseFloat(nombre2));
                break;
            case '-' :
                updateResultat(parseFloat(nombre1) - parseFloat(nombre2));
                break;
            case '*' :
                updateResultat(parseFloat(nombre1) * parseFloat(nombre2));
                break;
            case '/' :
                updateResultat(parseFloat(nombre1) / parseFloat(nombre2));
                break;
        }
    }

    let title = function (){
        switch (props.operator){
            case '+' :
                return 'Addition';
            case '-' :
                return 'Soustraction';
            case '*' :
                return 'Multiplication';
            case '/' :
                return 'Division';
        }
    }

    return (
        <div className="Operation">
            <h1>{title()}</h1>
            <input id='nombre1' onChange={nb1Handler}></input>
            <span> {props.operator} </span>
            <input id='nombre2' onChange={nb2Handler}></input>
            <button onClick={calcul}> = </button>
            <span id='resultat'> {resultat} </span>
        </div>
    );
}

export default Operation;