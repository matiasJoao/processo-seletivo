import React, { useState } from "react";

export function Principal () {
    const  [grauEsfeEsq, setGrauEsfEsq] = useState('');
    const [grauEsfeDir, setGrauEsfDir] = useState('');
    const  [grauCiliEsq, setGrauCiliEsq] = useState('');
    const  [grauCiliDir, setGrauCiliDir] = useState('');
    const res = document.getElementById('a').value
  
    let result = document.getElementsByClassName('res')

    

    function btn(f) {
        f.preventDefault()
        if (res == 1 ){
            result.innerHTML = "uau"
        }
    }
    
    return(
        <div className="container">
            <div className="opcoes">
                <form id="fomr" onSubmit={btn}>
                <p>grau esferico olho esquerdo :<input id="a" type="number" step="0.010" value={grauEsfeEsq} onChange={(e)=>setGrauEsfEsq(e.target.value)}/></p> 
                <p>grau esferico olho direito :<input type="number" step="0.010" value={grauEsfeDir} onChange={(b)=>setGrauEsfDir(b.target.value)}/></p> 
                <p>grau cilindrico olho esquerdo :<input type="number" step="0.010" value={grauCiliEsq} onChange={(c)=>setGrauCiliEsq(c.target.value)}/></p> 
                <p>grau cilindrico olho direito :<input type="number" step="0.010" value={grauCiliDir} onChange={(d)=>setGrauCiliDir(d.target.value)}/> </p>
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