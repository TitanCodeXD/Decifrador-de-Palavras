//React imports
import React from 'react'
import { Link } from 'react-router-dom';

//CSS
import styles from './About.module.css';

const About = () => {

  return (
    <div className = {styles.about}>
        <h2>Sobre o Site</h2>
        <p>Este site se baseia apenas para fins de estudo e experiência. Apenas um estudante de Computação treinando sua lógica de programação e buscando desafios.</p>
        <p>Após ser desafiado por um amigo fissurado em Gartic, botei em prática um pouco das coisas que sei.</p>
        <p>Feito por <a href = "https://portfolio-wesley-santos.netlify.app" target="_blank"><span>W</span>esley Santos</a>.</p>
        <h3>Teste o Decifrador de Palavras :)</h3>
        <Link to = "/" className = "btn">Testar</Link>
    </div>
  )
}

export default About