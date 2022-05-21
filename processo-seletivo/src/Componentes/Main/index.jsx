import React, { useState } from "react";
import './index.css'

export function Principal () {
    const  [grauEsfeEsq, setGrauEsfEsq] = useState('');
    const  [grauEsfeDir, setGrauEsfDir] = useState('');
    const  [grauCiliEsq, setGrauCiliEsq] = useState('');
    const  [grauCiliDir, setGrauCiliDir] = useState('');
    const  [result, setResult] = useState('');



    console.log(grauCiliDir,grauCiliEsq,grauEsfeDir,grauEsfeEsq);
    
   

    function btn(e){
        e.preventDefault();
    if (grauEsfeEsq < -15 && grauEsfeDir >= 1){
        return setResult('Valor invalido')

    }
    if (grauCiliEsq < -5 && grauCiliDir >= 1){
        return setResult('Valor Invalido')
    }
    if (grauEsfeEsq <= -3 && grauEsfeEsq >= -12 && grauEsfeDir >= -3 && grauEsfeDir <= -12){
        return setResult('Lente Prime')
    }
   
         else if (grauCiliEsq  >= -2 && grauCiliDir >= -2){
            if (grauEsfeEsq <= -3 && grauEsfeEsq >= -10 && grauEsfeDir >= -3 && grauEsfeDir >= -10){
                return setResult('Lente Prime')
        }
            else {
               return setResult('Valor invalido')
        }
    }
    if ((grauEsfeEsq <= 0 && grauEsfeEsq >= -15 && grauEsfeDir >= 0 && grauEsfeDir <= -15 ) || (grauCiliEsq >= -5 && grauCiliDir >= -5)){
        return setResult('Lente Vision')
         
    }
    else {
        return setResult('Valor invalido')
    }
}
    
    return(
        <div className="container">
            <div className="opcoes">
               
                <form onSubmit={btn} >
                <p>Grau esferico olho esquerdo :<input className="num" type="number" step="0.010" value={grauEsfeEsq} onChange={(e)=>setGrauEsfEsq(e.target.value)}/></p> 
                <p>Grau esferico olho direito :<input className="num" type="number" step="0.010" value={grauEsfeDir} onChange={(e)=>setGrauEsfDir(e.target.value)}/></p> 
                <p>Grau cilindrico olho esquerdo :<input className="num" type="number" step="0.010" value={grauCiliEsq} onChange={(e)=>setGrauCiliEsq(e.target.value)}/></p> 
                <p>Grau cilindrico olho direito :<input  className="num" type="number" step="0.010" value={grauCiliDir} onChange={(e)=>setGrauCiliDir(e.target.value)}/> </p>
                <input id="btn" type="submit" />
                </form>
            </div>
            <div className="result">
                <p id="res">Caso Aparaceça valor invalido, digite novamente o seu grau.</p>
                <p id="res"> A lente Adequada para você é a: {result}</p>
            </div>
        </div>
    )
}