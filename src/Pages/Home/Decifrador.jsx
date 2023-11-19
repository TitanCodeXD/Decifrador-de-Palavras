//React Imports
import React from 'react'
import { useState, useEffect } from 'react';
//import ClipboardJS from 'clipboard';

//CSS
import styles from './Decifrador.module.css';

//Base de Dados
import { wordsGeral } from '../../data/words.js';


const Decifrador = () => {
  
  const CopiaMensagem = ({ mensagem, onClose }) => {
    return (
      <div className="copia-mensagem">
        {mensagem}
        <span className="fechar" onClick={onClose}>&times;</span>
      </div>
    );
  };

    const [tamanho, setTamanho] = useState('');
    const [letra1, setLetra1] = useState('');
    const posicao1 = 1;
    const [letra2, setLetra2] = useState('');
    const [posicao2, setPosicao2] = useState('');
    const [letra3, setLetra3] = useState('');
    const [posicao3, setPosicao3] = useState('');
    const [letra4, setLetra4] = useState('');
    const [posicao4, setPosicao4] = useState('');
    const [resultados, setResultados] = useState([]);

    const [copiadoMensagem, setCopiadoMensagem] = useState('');

    const baseDeDados = wordsGeral;

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        filtrarPalavras();
      }, 100);
  
      return () => clearTimeout(timeoutId);
    }, [tamanho, letra1, posicao1, letra2, posicao2, letra3, posicao3, letra4, posicao4]);
  
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

      if (letra4 && posicao4) {
        resultadosFiltrados = resultadosFiltrados.filter(palavra => palavra[posicao4 - 1] === letra4.toLowerCase());
      }
  
      setResultados(resultadosFiltrados);
    };

  //  const handleInputChange = (e) => {
  //      Verifica se o valor contém apenas letras
  //     if (/^[A-Za-z\s]+$/.test(e.target.value)) {
  //       setTexto(e.target.value);
  //     }
  //   /};

  const copiarParaAreaDeTransferencia = (palavra) => {
    navigator.clipboard.writeText(palavra)
      .then(() => {
        setCopiadoMensagem(palavra);
        setTimeout(() => {
          setCopiadoMensagem(null);
        }, 1000); // Oculta a mensagem após 1 segundo
      })
      .catch((err) => {
        console.error('Erro ao copiar para a área de transferência:', err);
      });
  };
  
  

  return (

   <div className = {styles.center}>

      <h1>Decifrador de Palavras</h1>
      <p>Obs: Palavras que possuem espaço, o espaço deve ser considerado como caractere</p>

      <div className = {styles.letter}>
      <label>
        Tamanho da Palavra:
        <input type="number" value={tamanho} onChange={(e) => setTamanho(e.target.value)} />
      </label>
      <br />
      </div>

      <div className = {styles.letter}>

      <label>
        Letra 1:
        <input type="text" maxLength="1" value={letra1} onChange={(e) => {
      const inputValue = e.target.value;
      if (/^[A-Za-z]*$/.test(inputValue)) {
        setLetra1(inputValue);
      }
    }}
     />
      </label>

      
      <label>
        Posição letra 1: 
        <input 
        type="number" 
        value={posicao1} 
        onChange={(e) => setPosicao1(e.target.value)}
        style = {{color: 'black', fontWeight: '500', opacity: '.4'}}
        disabled
        />
      </label>
  

      </div>

      <div className = {styles.letter}>
      <label>
        Letra 2:
        <input type="text" maxLength="1" value={letra2} onChange={(e) => {
      const inputValue = e.target.value;
      if (/^[A-Za-z]*$/.test(inputValue)) {
        setLetra2(inputValue);
      }
    }}/>
      </label>

      <label>
        Posição letra 2:
        <input type="number" value={posicao2} onChange={(e) => {
      const inputValue = e.target.value;
      if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 30) {
        setPosicao2(inputValue);
      }
    }} />
      </label>


      <br />
      </div>

      <div className = {styles.letter}>
      <label>
        Letra 3:
        <input type="text" maxLength="1" value={letra3} onChange={(e) => {
      const inputValue = e.target.value;
      if (/^[A-Za-z]*$/.test(inputValue)) {
        setLetra3(inputValue);
      }
    }} />
      </label>

      <label>
        Posição letra 3:
        <input type="number" value={posicao3} onChange={(e) => {
      const inputValue = e.target.value;
      if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 30) {
        setPosicao3(inputValue);
      }
    }} />
      </label>


      <br />
      </div>

      <div className = {styles.letter}>
      <label>
        Letra 4:
        <input type="text" maxLength="1" value={letra4} onChange={(e) => {
      const inputValue = e.target.value;
      if (/^[A-Za-z]*$/.test(inputValue)) {
        setLetra4(inputValue);
      }
    }} />
      </label>

      <label>
        Posição letra 4:
        <input type="number" value={posicao4} onChange={(e) => {
      const inputValue = e.target.value;
      if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 30) {
        setPosicao4(inputValue);
      }
    }} />
      </label>

      
      <br />
      </div>


      
      <div className = {styles.results}>

        <h2>Resultados:</h2>
        <p style = {{
          color: 'white',
          fontWeight: '50'
          }}>Clique na palavra para copiar</p>
      <ul className = {styles.column_list}>

        {resultados.length > 0 ?(
          <>
          
          {resultados.length > 0 &&
          resultados.map((palavra, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative', borderBottom: '.1px solid gray', paddingBottom: '10px'}}>
            <span onClick={() => copiarParaAreaDeTransferencia(palavra)}>{palavra}</span>
            {copiadoMensagem === palavra && (
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-5px',
                background: '#4CAF50',
                color: 'white',
                padding: '5px',
                borderRadius: '5px',
                fontSize: '12px',
                boxShadow: '0px 0px 5px rgba(0,0,0,0.2)',
              }}>
                Copiado!
              </div>
            )}
          </li>
          ))}
          
          </>
        ) :(
          <>
          <div className = {styles.results}>
            <p>Sem resultados</p>
            </div>
          </>
        )}
        </ul>

      {copiadoMensagem && <CopiaMensagem mensagem={copiadoMensagem} onClose={() => setCopiadoMensagem('')} />}
      </div>
      
    </div>

  )
}

export default Decifrador