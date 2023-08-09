import React, { useEffect, useState } from "react";



function Content (){

    const [cidadeAtual, setcidadeAtual] = useState("")

    function pegarCidade(event){
        console.log(event.target.value)  //teste

    }

    function buscarCidade(event){
        console.log(event.target.value)
    }

//teste

    return( <div className="content2">
        <div className="header1">
         <input className="input1" type="text"  onChange={pegarCidade} placeholder="Digite a Cidade"/>
         <button className="button-search" onClick={buscarCidade}  ><img className="icon-lupa" src="./src/assets/lupa.png" alt="lupa-buscar" /></button> 
        
        </div>

         <h2 className="h2dotest"> Tempo em São paulo</h2> 
        
        
         <p>21°</p>

         <img alt="Nublado"></img> <p>Nublado</p>

         <p>Umidade 76%</p>

    </div>)
}

export default Content