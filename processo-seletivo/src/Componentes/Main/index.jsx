import React, { useState } from "react";


export function Principal () {
    const  [grauEsfeEsq, setGrauEsfEsq] = useState('');
    const [grauEsfeDir, setGrauEsfDir] = useState('');
    const  [grauCiliEsq, setGrauCiliEsq] = useState('');
    const  [grauCiliDir, setGrauCiliDir] = useState('');
    let result = document.getElementsByClassName('res')
    console.log(grauCiliDir,grauCiliEsq,grauEsfeDir,grauEsfeEsq)
    
   

    function btn(e){
        e.preventDefault();
    if (grauEsfeEsq < -15 && grauEsfeDir >= 1){
        return console.log('valor invalido') 

    }
    if (grauCiliEsq < -5 && grauCiliDir >= 1){
       return  console.log('valor invalido')
    }
    if (grauEsfeEsq <= -3 && grauEsfeEsq >= -12 && grauEsfeDir >= -3 && grauEsfeDir <= -12){
        return console.log('lente prime')
    }
   
         else if (grauCiliEsq  >= -2 && grauCiliDir >= -2){
            if (grauEsfeEsq <= -3 && grauEsfeEsq >= -10 && grauEsfeDir >= -3 && grauEsfeDir >= -10){
            return  console.log('lente prime')
        }
            else {
            return   console.log('valor invalido')
        }
    }
    if (grauEsfeEsq <= 0 && grauEsfeEsq >= -15 && grauEsfeDir >= 0 && grauEsfeDir <= -15 || grauCiliEsq >= -5 && grauCiliDir >= -5){
        return   console.log('lente vision')
         
    }
    else {
        return console.log('valores invalidos')
    }
}
    
    return(
        <div className="container">
            <div className="opcoes">
                <form onSubmit={btn} >
                <p>grau esferico olho esquerdo :<input id="a" type="number" step="0.010" value={grauEsfeEsq} onChange={(e)=>setGrauEsfEsq(e.target.value)}/></p> 
                <p>grau esferico olho direito :<input type="number" step="0.010" value={grauEsfeDir} onChange={(e)=>setGrauEsfDir(e.target.value)}/></p> 
                <p>grau cilindrico olho esquerdo :<input type="number" step="0.010" value={grauCiliEsq} onChange={(e)=>setGrauCiliEsq(e.target.value)}/></p> 
                <p>grau cilindrico olho direito :<input type="number" step="0.010" value={grauCiliDir} onChange={(e)=>setGrauCiliDir(e.target.value)}/> </p>
                <label>cilick</label>
                <input type="submit" />
                </form>
                <div className="result">
                   
                </div>
            </div>
        </div>
    )
}