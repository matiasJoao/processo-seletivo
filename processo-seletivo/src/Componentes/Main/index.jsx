import React, { useState } from "react";
import axios from "axios"

export function Principal () {
    const  [grauEsfeEsq, setGrauEsfEsq] = useState('');
    const [grauEsfeDir, setGrauEsfDir] = useState('');
    const  [grauCiliEsq, setGrauCiliEsq] = useState('');
    const  [grauCiliDir, setGrauCiliDir] = useState('');
    let result = document.getElementsByClassName('res')
        
        

    function btn(e) {
        e.preventDefault()

    }
    
    return(
        <div className="container">
            <div className="opcoes">
                <form id="fomr" onSubmit={btn}>
                <p>grau esferico olho esquerdo :<input id="a" type="number" step="0.010" value={grauEsfeEsq} onChange={(e)=>setGrauEsfEsq(e.target.value)}/></p> 
                <p>grau esferico olho direito :<input type="number" step="0.010" value={grauEsfeDir} onChange={(e)=>setGrauEsfDir(e.target.value)}/></p> 
                <p>grau cilindrico olho esquerdo :<input type="number" step="0.010" value={grauCiliEsq} onChange={(e)=>setGrauCiliEsq(e.target.value)}/></p> 
                <p>grau cilindrico olho direito :<input type="number" step="0.010" value={grauCiliDir} onChange={(e)=>setGrauCiliDir(e.target.value)}/> </p>
                <input type="submit"  value="click"/>
                </form>
                <div className="resut">
                    <p className="res">

                    </p>
                </div>
            </div>
        </div>
    )
}