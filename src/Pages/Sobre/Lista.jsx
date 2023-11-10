//React Imports
import React from 'react'
import { useState, useRef } from 'react';

//CSS
import styles from './Lista.module.css';


const Lista = () => {
  const [numeroLetras, setNumeroLetras] = useState('');
  const inputNumeroRef = useRef(null);

  const handleInputChange = (e) => {
    setNumeroLetras(e.target.value);
  };

  const scrollToSection = () => {
    const numeroDigitado = parseInt(numeroLetras, 10);

    if (numeroDigitado >= 2 && numeroDigitado <= 24) {
      const sectionId = `section${numeroDigitado}`;
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      scrollToSection();
    }
  };

  return (

    <div className = {styles.center}>
        <h1>Lista Gartic Atualizada 2023</h1>

        <div className = {styles.ref}>
        <h2>Digite o número de letras para ir diretamente para a seção:</h2>
          <input 
          type="number" 
          value={numeroLetras}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          ref={inputNumeroRef}
          placeholder="Insira o número de letras"
          />
        <button onClick={scrollToSection} className = 'btn'>Ir para a Seção</button>

          </div>

        <div className = {styles.line}>
          <section id = "section2">

          <h4>2 Letras</h4>
        <p>
          * dj * cd * fã * * pá * pé * rã * </p>
          </section>


          <section id = "section3">
        <h4>3 Letras</h4>
        <p>	<span>A</span>	* asa * aro * avó * <br></br>
            <span>B</span>	* bar * baú * boá * boi * <br></br>
            <span>C</span>	* céu * chá * cru *  <br></br>
            <span>D</span>	* dia * dvd * <br></br>
            <span>E</span>	* ema * <br></br>
            <span>F</span>	* fax * fio *     <br></br>
            <span>G</span>	* giz * gps *     <br></br>
            <span>I</span>	* ímã *     <br></br>
            <span>L</span>	* ler * lua *     <br></br>
            <span>M</span>	* mãe * mão * mar * mel * 	<br></br>
            <span>O</span>  * ovo <br></br>
            <span>P</span>	* pai * pão * pia *     <br></br>
            <span>R</span>	* rei * rim * rio * rua * rum * <br></br>
            <span>S</span>	* sal * sol *     <br></br>
            <span>U</span>	* uva *     <br></br>
            <span>V</span>	* véu *<br></br>
        </p>
        </section>



          <section id = "section4">
        <h4>4 Letras</h4>
        <p>	<span>A</span>  * abiu * açaí * acne * afta * água * alça * alce * alho * alto * amar * anão * anel * anjo * arar * arca * arco * asno * ator * atum <br></br>
            <span>B</span>	* babá * bafo * bala * balé * bata * bebê * beca * bico * bidê * bife *	boca * bode * boia * bola * bolo * boné * bota * bote * boto * boxe * bule * cabo * café * cair * cajá * caju <br></br>
            <span>C</span>	* cama * cano * capa * caro * casa * chão * chip * cipó * clip * coco *	cola * cone * copo * coxa * cruz * cubo * cuco * cuia <br></br>  
            <span>D</span>	* dado * dedo * divã * doce * doer <br></br>     
            <span>E</span>	* égua * elfo <br></br>
            <span>F</span>	* faca * fada * feio * figa * figo * fila * filé * fino * fita * flor * foca * fofa * fofo * fogo * frio <br></br>
            <span>G</span>  * galo * gari * gato * gelo * gema * gibi * gola * gota <br></br>
            <span>I</span>	* iate * iglu * ilha * ioiô * irmã * isca <br></br>
            <span>J</span>	* jaca * jacu * jato * jiló * judô * juiz <br></br>   
  	        <span>L</span>	* laço * lago * lama * lata * lava * leão * leoa * leve * lima * liso * lobo * loja * lula * lupa * luva <br></br>
            <span>M</span>	* maca * maçã * mago * maiô * mala * mapa * mata* meia * mesa *	mina * moer * mola * moto * mula * muro <br></br>      
            <span>N</span>	* nabo * naja * neta * neto * neve * novo * nuca <br></br> 
            <span>O</span>	* oboé * odre* óleo * olho * onça * onda * orar * orca * osso * ouro * oval * paca * pacu * país * pano * pata  <br></br>
            <span>P</span>	* patê * pato * pavê * pelo * pena * pera * peru * pião * piau * pino *	pipa * pneu * poça * poço * pote * puma  <br></br>
            <span>R</span>	* rabo * rack * raia * raio * raiz * ralo * raso * rato * rede * remo * rena * reto * rico * robô * rodo * roer * romã * rosa * ruga * saia * sala * sapo <br></br>
            <span>S</span>	* seco * selo * sino * siri * sofá * soja * sopa * soro * suco * sujo *	sumô * suor * surf * taça * taco * tatu * taxi <br></br>
            <span>T</span>	* teia * tela * teto * tofu * trem <br></br>
            <span>U</span>	* unha * urna * urso <br></br>   
            <span>V</span>	* vaca * vaso * vela * vila * voar 	<br></br>
            <span>X</span>	* xale  <br></br>
            <span>Z</span>	* zebu  <br></br>
        </p>
        </section>

        <section id = "section5">
        <h4>5 Letras</h4>
        <p>	<span>A</span>  <br></br>
            <span>B</span>	<br></br>
            <span>C</span>	<br></br>  
            <span>D</span>	<br></br>     
            <span>E</span>	<br></br>
            <span>F</span>	<br></br>
            <span>G</span>  <br></br>
            <span>I</span>	<br></br>
            <span>J</span>	<br></br>   
  	        <span>L</span>	<br></br>
            <span>M</span>	<br></br>      
            <span>N</span>	<br></br> 
            <span>O</span>	 <br></br>
            <span>P</span>	<br></br>
            <span>R</span>	<br></br>
            <span>S</span>	<br></br>
            <span>T</span>	<br></br>
            <span>U</span>	 <br></br>   
            <span>V</span>	* vagão * vagem * varal * vazio * velho *	vento * vênus * verão * vesgo *	vespa * vidro * viela * vigia * vilão * vinho * viola * vodca * <br></br>
            <span>Z</span>	* zebra * zíper * zumbi <br></br>
        </p>
        </section>

      </div>
    </div>
  )
}

export default Lista