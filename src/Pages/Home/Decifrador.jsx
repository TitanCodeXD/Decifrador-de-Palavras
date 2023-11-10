//React Imports
import React from 'react'
import { useState, useEffect } from 'react';

//CSS
import styles from './Decifrador.module.css';

//Base de Dados
import { wordsGeral } from '../../data/words.js';

const Decifrador = () => {

    const [tamanho, setTamanho] = useState('');
    const [letra1, setLetra1] = useState('');
    const [posicao1, setPosicao1] = useState('');
    const [letra2, setLetra2] = useState('');
    const [posicao2, setPosicao2] = useState('');
    const [letra3, setLetra3] = useState('');
    const [posicao3, setPosicao3] = useState('');
    const [resultados, setResultados] = useState([]);
    const baseDeDados = wordsGeral;

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        filtrarPalavras();
      }, 100);
  
      return () => clearTimeout(timeoutId);
    }, [tamanho, letra1, posicao1, letra2, posicao2, letra3, posicao3]);
  
    const filtrarPalavras = () => {
      let resultadosFiltrados = baseDeDados;
  
      if (tamanho) {
        resultadosFiltrados = resultadosFiltrados.filter(palavra => palavra.length === parseInt(tamanho));
      }
  
      if (letra1 && posicao1) {
        resultadosFiltrados = resultadosFiltrados.filter(palavra => palavra[posicao1 - 1] === letra1.toLowerCase());
      }
  
      if (letra2 && posicao2) {
        resultadosFiltrados = resultadosFiltrados.filter(palavra => palavra[posicao2 - 1] === letra2.toLowerCase());
      }
  
      if (letra3 && posicao3) {
        resultadosFiltrados = resultadosFiltrados.filter(palavra => palavra[posicao3 - 1] === letra3.toLowerCase());
      }
  
      setResultados(resultadosFiltrados);
    };


  return (

   <div className = {styles.center}>

      <h1>Decifrador de Palavras</h1>
      <p>Obs: Palavras que possuem espaço, o espaço deve ser considerado no tamanho da palavra</p>
      <div>
      <label>
        Tamanho da Palavra:
        <input type="number" value={tamanho} onChange={(e) => setTamanho(e.target.value)} />
      </label>
      <br />
      </div>

      <div className = {styles.letter}>
      <label>
        Letra 1:
        <input type="text" maxLength="1" value={letra1} onChange={(e) => setLetra1(e.target.value)} />
      </label>
      <br />

      <label>
        Posição letra 1:
        <input type="number" value={posicao1} onChange={(e) => setPosicao1(e.target.value)} />
      </label>
      <br />
      </div>

      <div className = {styles.letter}>
      <label>
        Letra 2:
        <input type="text" maxLength="1" value={letra2} onChange={(e) => setLetra2(e.target.value)} />
      </label>

      <label>
        Posição letra 2:
        <input type="number" value={posicao2} onChange={(e) => setPosicao2(e.target.value)} />
      </label>
      <br />
      </div>

      <div className = {styles.letter}>
      <label>
        Letra 3:
        <input type="text" maxLength="1" value={letra3} onChange={(e) => setLetra3(e.target.value)} />
      </label>
      <label>
        Posição letra 3:
        <input type="number" value={posicao3} onChange={(e) => setPosicao3(e.target.value)} />
      </label>
      <br />
      </div>

      
      <div className = {styles.results}>

      <ul>

        {resultados.length > 0 ?(
          <>
          <h2>Resultados:</h2>
          
          {resultados.length > 0 &&
          resultados.map((palavra, index) => (
            <li key={index}>{palavra}</li>
          ))}
          
          </>
        ) :(
          <>
          <p>Sem resultados</p>
          </>
        )}
      </ul>

      </div>
      
    </div>

  )
}

export default Decifrador