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

    <div name="viewport" className = {styles.center}>
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
        <p>	<span>A</span>  * ábaco *abrir * ácido* adaga * adega * adiar * adubo * afiar * agogô * aguar * águia *	álbum * altar * amigo * amora * andar * anzol * apito * arara * arder * areia * arpão * arroz * átomo * atrás * avelã * avião * axila * azedo<br></br>
            <span>B</span>	* babar * bacia * bacon * bagre * balão * balde * balsa * bambu * banco * banda * banho * banjo * barba * barco *	barro * bater * batom * beber *	berço * bicar * bisão * bloco *	blusa * boate * bocal * bócio * boiar * boina * bolha * bolsa * bolso * bomba * bonde * bongô * botão * braço * brega * broca * bruxa * bucha * buquê *<br></br>
            <span>C</span>	* cabra * cação* cacau * cacho * cacto * caído * caixa * calar * calça * calmo * calor * canga * canil * canoa * canto * capim * capuz * caqui * carne * carpa * carro * carta *	casar * casca * caspa * caule * cavar *	cerca * cervo * cesta * cetro * chalé * chave * chefe * cheio * chopp *	chulé * chuva * cidra * cinto * circo *	cisco * cisne * clara * claro * clube * coala * cobra * cocar * coçar * cofre * colar * comer * cópia * corda * coroa * corvo * couve *	cravo * crepe * crina * cueca * curau * curió *	curto * curva * cutia *<br></br>  
            <span>D</span>	* damas * dardo * dedal * dente * dingo * disco * dócil * doido * domar * ducha <br></br>     
            <span>E</span>	* ebola * esqui <br></br>
            <span>F</span>	* facão * faixa * falar * faraó * farda * farol * fatia  * febre * feliz * fênix * ferir * festa * filha * filho * fogão * foice * folha * forma * forno * forte * fraco * frear * frito *	fugir * fundo * funil * furão * furar * fuzil * <br></br>
            <span>G</span>  * gaita * galho * gamão * gambá * ganso *	garça * garfo * garoa * garra * gênio * gesso * gibão * glacê * globo * gnomo * golfe * gongo * gorro *	grade * grilo * gripe * guiar *<br></br>
            <span>H</span>  * harpa * herói * hiena * horta * hotel <br></br>
            <span>I</span>  * índio * irara * irmão <br></br>
            <span>J</span>	* jambo * jarra * jaula * jeans * jogar <br></br>   
  	        <span>L</span>	* lacre * lagoa * lança * lápis * laquê * larva * latir * lavar * lebre * leite *	lenço * lenha * lente * lento * leque * lesma * lhama * libra * licor * ligar *	limão * limpo * linda * linha *	livro * lixar * loira * lombo * longo * louco * louro * lousa * lutar *<br></br>
            <span>M</span>	* macio * magro * mamão * mamba * manga *	manta * marte * melão * menta * metrô * milho * míope * modem * moeda * molho * monge * morsa * mosca *	mouse * múmia * mural * museu * musgo<br></br>      
            <span>N</span>	* nadar * nariz * natal * navio * negar *	nevar * ninho * noite * nozes * nuvem <br></br> 
            <span>O</span>	* olhar * ombro * órgão * ostra * ouvir <br></br>
            <span>P</span>	* padre * pagar * palco * palha * panda *	papel * parca * pasta * pavão * pedal *	pedra * peixe * pente * perna *	pesca * piano * picar * pilão * pilha *	pinça * pinha * pirão * pires * pisar *	pista * pizza * placa * pobre * podar * pódio * pólen * polvo * pomar * pombo * pônei * ponte * porão * porco * porta * porto *	poste * potro * praça * praia * prata *	prato * prego * pudim * pular * pulga *	pulso * puxar * <br></br>
            <span>Q</span>	* quati * quepe * quibe <br></br>
            <span>R</span>	* radar * rádio * raio x * ralar * rampa * rapel * rédea * regar * régua * rezar * rifle * rímel * rodar *	rolar * rolha * ruiva <br></br>
            <span>S</span>	* sabão * sagui * salsa * santo * saquê * sarna * sauna *	secar * serra * short * skate * socar * sogra * sonho * spray * subir * suflê * sujar * sumir * sunga * sushi *	sutiã *  <br></br>
            <span>T</span>	* tábua * talco * tampa * tanga * telha *	tempo * tenda * tênis * terno * terra *	testa * tiara * tíbia * tigre * tinta * tocar * tocha * toldo * torre *	torta * torto * tosse * touca * touro *	trair * trave * trenó * trevo *	tribo * trigo * tripé * trono * trufa *	truta * tumba * túnel *<br></br>
            <span>U</span>	* uivar * urano * urubu <br></br>   
            <span>V</span>	* vagão * vagem * varal * vazio * velho *	vento * vênus * verão * vesgo *	vespa * vidro * viela * vigia * vilão * vinho * viola * vodca * <br></br>
            <span>Z</span>	* zebra * zíper * zumbi <br></br>
        </p>
        </section>

        <section id = "section6">
        <h4>6 Letras</h4>
        <p>	<span>A</span> * abafar * abajur * abanar * abelha * aberto * acenar * açúcar * acusar * adoçar * adubar * adulto * afiado * agrião * agulha * alagar * alarme  * álcool * alface * algema * alisar * almoço *	altura * alugar * amador * amante *	amargo * ameixa * âncora * anilha *	antena * antigo * apitar * aranha *	argola * arraia * árvore * áspero * assado * atacar * atirar * atleta * azeite * azulão * <br></br>
            <span>B</span> * babado * baiacu * balaio * balcão * baleia * banana * barata * barril * bastão * batata * batida * batina * bazuca * bêbado * beijar * berrar * bíblia * bicama * bíceps * big ben *	bigode * bilhar * biruta * bombom * boneca * bonita * bonsai *	bordar * bosque * botina * brinco * broche * bronze * brotar * bueiro * búfalo * buraco * buscar * buzina * <br></br>
            <span>C</span> * cabana * cabeça * cabelo * cabide * cadela * cafona * cafuné * caixão * cajado * cálice * calota * camada * camelo * camisa* caneca * canela * caneta * canhão * cantar * cantil * cantor * canudo * capela * careca * careta *	cartão * carvão * casaco * castor *	cavalo * caviar * cebola * célula * cereal * cereja * chapéu * cheque * chifre * chofer * choque * chorar * chuchu * chutar * cidade * cigana * cílios *	cinema * classe * clicar * coador * cobrir * cocada * coelho * coiote * colcha * colete * colher * coluna * cometa * cômoda * concha * condor * corais * córnea * correr * cortar * coruja * costas * cozido * cozido * crachá * crânio * crista * cupido * curtir * curvar * cuscuz * cutelo * <br></br>  
            <span>D</span> * dançar * degrau * deitar * dengue * descer * destro * devoto * diário * doente * domado * dominó * dormir * dragão * duende *<br></br>     
            <span>E</span> * educar * empada * enguia * entrar * enviar * enxada * enxuto * escada *	escama * escola * escova * escudo * escuro * esgoto * espada * espeto * espião * espuma * estado * estojo * estufa<br></br>
            <span>F</span> * faisão * faísca * falcão * famoso * faquir * fatiar * favela * febril * fechar * feijão * felino * ferrão *	ferver * fiação * fíbula * fígado * filmar * fivela * flauta * flecha * fondue * formão * frágil * fralda * frango *	franja * frasco * freira * fresco * fritar * fronha * frouxo * fuinha * fumaça * furado * furgão * futsal * <br></br>
            <span>G</span> * gaiola * gancho * ganhar * garçom * gaúcho * gaveta * gavião * gazela *	geleia * gêmeos * girafa * girino * goiaba * gorila * grande * gravar * grelha * gritar * grosso * guidão * guloso * <br></br>
            <span>H</span> * hélice * hóquei * hóstia * hóstia <br></br>
            <span>I</span> * igreja * iguana <br></br>
            <span>J</span> * jabuti * jacaré * jaleco * janela * jantar * jardim * jatobá * javali * jiboia * joelho * jóquei * jornal * jujuba * julgar <br></br>   
  	        <span>L</span> * lábios * lacrar * lajota * lamber * lâmina * lançar * lancha * leitão * lençol * ligado * limpar * língua *	lontra * luneta * lustre <br></br>
            <span>M</span> * macaco * macuco * maduro * mágico * malhar * malote * mamute * mancha *	manjar * marcar * marfim * mastro * maxixe * médico * medusa * metido * mingau * míssil * modelo * moinho * molhar * montar * morder * moreno * mousse * muleta * multar * murcho *<br></br>      
            <span>N</span> * narina * netuno * novela <br></br> 
            <span>O</span> * oceano * óculos * oleoso * ônibus * orelha * ouriço * outono * ouvido * ovelha <br></br>
            <span>P</span> * pacote * paletó * pálido * panela * papete * parada * pardal * parede * parque * partir * passar * pastel * patela * patins * pegada * pégaso * pensar * pepino *	perder * pernil * pérola * peruca * pesado * pescar * pétala * peteca * picles * picolé * pijama * piloto * pincel * pintar * pintor * piolho * piorar * pipoca * pirata * piscar * pitaya * planta * plutão * poeira * pompom * portão * postar * poster * pousar * prédio * pregar * prisma * pulmão * punhal * pupila *<br></br>
            <span>Q</span> * quadro * quarto * queijo * queixo * quente *	quiabo * quicar * quieto *<br></br>
            <span>R</span> * rabada * rabeca * rachar * rainha * rápido * raposa * rasgar * raspar * riacho * ricota * ringue * risoto * roleta * rótulo * roupão *<br></br>
            <span>S</span> * sacada * salada * salame * salgar * salmão * salsão * saltar * sangue * sapato * sentar * sereia * serrar * servir * sirene * soldar * solido * sombra * sonhar * sorrir * sucuri *	suéter * sundae * surfar * <br></br>
            <span>T</span> * tablet * talher * tâmara * tambor * tampar * tanque * tapete * tatuar * teatro * tecido * teclar * templo * tigela * tijolo * tímido *	tipoia * toalha * tobogã * tomada * tomate * torcer * torrar * tossir * traíra * trança * trator * tremer * trilho * triste * trocar * troféu * tromba * trompa * tronco * tucano * tuiuiú * tulipa *	túnica *<br></br>
            <span>U</span> * uísque * último * umbigo * <br></br>   
            <span>V</span> * vatapá * vencer * vender * veneno * ventar * vestir * viajar * vigiar * viking * violão * vitral * voltar * volume * vulcão *<br></br>
            <span>W</span> * webcam  <br></br>
            <span>X</span> * xadrez * xarope * xerife * xícara 	<br></br>
            <span>Z</span> * zangão <br></br>
        </p>
        </section>

        <section id = "section7">
        <h4>7 Letras</h4>
        <p>	<span>A</span> * abacate   * abacaxi * abafado * abaixar * abduzir   * abotoar * abraçar * acalmar   * acampar * acarajé * aceitar * acender * acerola   * acertar * achatar * acordar   * açougue * acusado * adesivo * admirar * afastar   * afogado * afundar * agachar * alargar * alegrar * alergia * algodão * aliança * alicate * alinhar * almoçar   * alongar * alpiste * amarrar * amassar   * amêndoa * amizade * amoroso * andador * andaime * animado  *apertar * apontar * aquário   * aquecer * arapuca * árbitro * arbusto * arenque   * armário * armazém * artéria   * artesão * asfalto * atadura * aterrar * atolado * atrasar * auréola * avental * azaleia * azulejo <br></br>
            <span>B</span> * babador   * babuíno * bagagem * baguete * balança   * baleiro * bambolê * bandana * bandeja * bangalô   * baqueta * barbudo * barista * barraca   * barriga * batente * bateria * batismo * batizar   * batucar * beirute * beliche * bengala * bermuda   * besouro * bezerro * bigorna * bilhete * biólogo   * biquíni * bisteca * bisturi * bocejar * boitatá   * bolacha * boliche * bondoso * bordado * brilhar   * brincar * brindar * brioche * buzinar *<br></br>
            <span>C</span> * cabrito   * caçador * caçamba * cachaça *	cachaça   * cachear * cacique * cadarço *	cadeado   * cadeira * caderno * caiaque * caipora *	caixote * calango * calçada * camarão  * caminho * canário * canguru *	 canhoto   * canibal * cansado * capacho * caracol * cardume   * carimbo * carpete * carreta *	carroça * cartola * cascata * caseiro * castelo   * catraca * caveira * caverna * caxumba * cegonha   * celeiro * celular * cenoura * cérebro * ceroula   * cerveja * chá mate* chaminé * charuto * cheddar * cheirar * chicote   * chimbal * chinelo * chupeta * churros   * cigarra * cimento * cliente * clínica * codorna  * colchão * coleira * colibri * colírio   * colmeia * colorir * comprar * confete * confuso * convite * cookies   * copeiro * coração * corneta * corpete   * córrego * cortina * costela * coturno * coveiro * coxinha * cozinha * cratera   * crescer * criança * cristal * cruzeta   * cupcake * curioso *	 <br></br>  
            <span>D</span> * decolar   * deitado * demitir *	desenho * deserto * desfiar * desfile * devagar   * digitar * direita * dirigir   * dividir * doceiro * domador * dourado *<br></br>     
            <span>E</span> * echarpe   * eclipse * edredom * empadão * enfeite * engolir * enjoado * ensinar   * enxugar * erupção * ervilha * escalar * escavar * escovar * esfinge * esfirra * esfriar   * esgrima * esmagar * esmalte * esôfago * espelho   * espinha * espinho * espiral * esponja * esquilo   * esquimó * esquina * estação * estádio * estampa   * estante * estátua * esteira * estrada   * estrela * estribo * estudar * estufar * evoluir   *<br></br>
            <span>F</span> * fábrica   * família * faminto * farejar * farinha * fazenda   * flácido * flanela * flertar * florido   * flutuar * focinho * focinho * fofocar * foguete * formiga * fratura  * furacão * furioso * fusível * futebol <br></br>
            <span>G</span> * gaivota   * galáxia * galinha * galocha * galopar * gandula * garagem * garrafa * gatilho   * geleira * gengiva * geólogo * gigante * ginasta   * goleiro * gôndola * gostoso * goteira * gráfico   * grafite * granada * granizo * gravata   * grávida * guaraná * guardar   * guarita * guincho *   <br></br>
            <span>H</span> * haltere   * hamster * hipismo * hortelã  <br></br>
            <span>I</span> * iceberg  *  incenso * injeção * injetar * inverno *	iogurte   *<br></br>
            <span>J</span> * jangada * jaqueta * jumento   * júpiter <br></br>   
            <span>K</span> * ketchup <br></br>
  	        <span>L</span> * lã de aço * lacraia * ladeira * lagarta * lagarto * lagosta   * lágrima * lambari * lâmpada * lampião * laranja * lareira * laringe * lasanha * levitar * lixeira *<br></br>
            <span>M</span> * macacão   * machado * madeira * maestro * magoado * mandril *  maquete  * maquiar * marisco  * marmita * marreco *	marreta   * martelo * máscara * maxilar * medalha *	medicar   * meditar * medroso * mendigo * meteoro *	miçanga   * minhoca  * mochila * moldura *	 moleiro   * molhado * molusco * monitor * monstro * moranga   * morango * morcego * mordaça * mordida * mordomo   * mosaico * mostrar * motoboy * muralha   * murchar * músculo *  <br></br>      
            <span>N</span> * natação * navalha *	navegar   * neblina * nervoso * nublado * nuggets<br></br> 
            <span>O</span> * omelete   * orégano * orelhão * origami <br></br>
            <span>P</span> * padaria   * padeiro * palácio * palhaço * palheta *	palmito   * pamonha * pântano * pantera * pantufa * pão doce* passear * pedágio * pedalar * pênalti   * pêndulo * peneira * pequeno   * perfume * pescoço * pêssego * pet shop *	picanha   * pilotar * pimenta * pinguim * pintado * piranha   * piscina * pistola * pitanga * planeta * plantar * plateia * polegar * polenta * pontudo *	porta cd* pousada * prancha * prender * proibir   * prótese * <br></br>
            <span>Q</span> * quadril   * quartel * quebrar * queimar * quentão * quimono * quindim * quintal  <br></br>
            <span>R</span> * ralador   * raquete * rasgado * rastelo * rasurar * rebocar * reboque * redondo * reflexo * regador  * relógio * remédio * repolho   * retrato * revista * risoles * risonho * rondele   * rosário * rubéola *	<br></br>
            <span>S</span> * salário * saleiro * samurai * sanfona   * sarampo * saturno * scanner *	segurar   * semente * sentado * separar * seringa   * serrote * soldado * sorriso * sortudo   * sorvete * sozinho * suspiro * <br></br>
            <span>T</span> * tamanco  * tapioca * taxista * teclado *	técnico * telhado * tempero * tenente * tenista   * teólogo * tequila * terraço * tesoura *	tesouro   * tilápia * tingido * torcida   * tornado * torpedo * torrada * torrone * tosador   * trailer * trancar * treinar * triatlo * tríceps   * tubarão * turista * turista   * <br></br>
            <span>V</span> * vacinar   * vampiro * varanda * vasilha * veleiro * velório   * vestido * viaduto * viatura * vinagre   * violino * viseira * visitar * vitrola * volante  * vomitar * 	<br></br>
            <span>Z</span> * zabumba   * zelador  <br></br>
        </p>
        </section>

        <section id = "section8">
        <h4>8 Letras</h4>
        <p>	<span>A</span> * abafador  * abaixado * abençoar * abóbora * academia * acelerar  * achatado * acidente * acrobata  * adestrar * admirado   * adoçante * adorador * advogado * afastado   * afluente * afundado * agachado  * agarrado * agrônomo   * ajoelhar * alavanca  * alcançar * alfaiate  * alfinete * alinhado* almofada * amarrado * amassado * amendoim *	apagador * aparador * apertado * aplaudir * arbitrar  * ariranha * armadura   * arqueiro * arrancar * arranhar  * arrastar * arrepiar   * asa delta * asfaltar * assaltar  * assistir * assoalho   * assoprar * assustar * atirador * atrasado   * autorama * avestruz * azeitona   *<br></br>
            <span>B</span> * bacalhau * bagunçar * baioneta * baixista *	balançar  * bandeira * banheira  * banheiro * banqueta   * banquete * barbante * barbeiro  * barracão * barranco   * barreira * batucada  * baunilha * beijinho   * beisebol * beliscão * beliscar  * berçário * berimbau   * berrante * binóculo * biscoito * bloquear  * bochecha * bombacha * bombeiro *	bondinho  * borracha * borrifar   * boxeador * brócolis * bromélia  * bronzear * burritos   * <br></br>
            <span>C</span> * caçarola * cacheado * cachecol  * cachimbo * cachorro   * calcinha * calvície * camaleão  * camburão * caminhão   * caminhar * camiseta * camisola  * canastra * canavial * canivete * canoagem   * capacete * capivara  * capoeira * caramelo   * caramujo * caravela * carnaval * carneiro   * carregar * carretel * carrinho  * carteira * carteiro * cascavel *	castanha  * castanho * castiçal   * catapora * catarata * catedral  * cavalgar   * celebrar * centauro *	chá preto * chá verde* chafariz   * chaleira * charrete   * chaveiro * cheiroso * chiclete * chocalho   * chucrute * chuteira * chuveiro  * cicatriz * ciclismo * cilindro *	cisterna  * ciumento * claquete   * cobertor * cochilar * cogumelo  * comparar * compasso * concreto * conectar * congelar  * conhaque * consolar   * contente * convidar  * coqueiro * coquetel * corcunda *	cordeiro  * corrente * corrimão   * corrupto * corsário * costurar  * cotovelo * cozinhar  * croquete * cultivar * curupira   * cutícula *<br></br>  
            <span>D</span> * delegado   * dentista * depenado *	derramar  * derreter * derrubar * descalço * descarga * desenhar   * desfilar * desligar *	desmatar * despedir   * destruir * detetive * diabetes * diamante   * diarista * dinamite  * dinheiro * discutir   * disquete * doloroso *<br></br>     
            <span>E</span> * edifício  * elástico * elefante   * elegante * elevador * embarcar * embarque   * empilhar * empurrar * encardir  * enchente * encostar   * enfeitar * engasgar * enrolado  * ensaboar * entalado   * envelope * esconder  * escopeta * escritor   * escrivão * esculpir * escultor  * esfregão * esfregar   * esmagado * espantar  * espátula * espetado   * espirrar * espremer * esquadro  * esquerda * estilete * estômago *	estourar * etiqueta   * evaporar * exército * explodir   * explosão * <br></br>
            <span>F</span> * fabricar  * fantasia * fantasma   * fantoche * faqueiro * farmácia  * farolete * feijoada   * feirante * ferreiro  * ferrolho * fervente   * festejar * fichário * flamingo  * floresta * florista   * fogueira * frigobar * fruteira   *<br></br>
            <span>G</span> * gabinete* gangorra   * garganta * gasolina * gelatina * gengibre *	geógrafo  * geriatra   * girassol * goiabada  * golfinho * grampear * graviola *	grinalda  * grisalho * groselha   *  guepardo  * guerrear * guinchar   * guitarra * <br></br>
            <span>H</span> * handebol  * hepatite * hidrante * holofote * hospício * hospital   *  <br></br>
            <span>I</span> * imaginar  * imprimir * incêndio  * inclinar * ingresso  * inspirar * internet  * isqueiro * <br></br>
            <span>J</span> * jararaca * joaninha <br></br>   
  	        <span>L</span> * lambreta  * lanterna * leiteira * lenhador   * lentilha * leopardo * levantar  * libélula * limonada   * linguado * linguiça *	listrado  * livraria * locadora   * lombriga *<br></br>
            <span>M</span> * maçaneta  * maçarico * macarrão * maionese * manchado  * mandioca * manequim  *manicure * manteiga * maracanã   * maracujá * maratona * mariposa * martelar * material * mecânico  * megafone * melancia   * mercúrio * merengue * mergulho  * mesquita * mexerica   * mexilhão * misturar * molheira * monóculo   * montador * montanha * mordedor  * mosquito * mostarda   * mouse pad* <br></br>      
            <span>N</span> * notebook  <br></br> 
            <span>O</span> * obelisco  * olheiras   * ombreira * orelhudo<br></br>
            <span>P</span> * pá de lixo* paisagem * palmeira * palmilha * pandeiro * panetone  * panqueca * pão de mel * pão sírio* papagaio *	paquerar * parafuso   * parceiro * parmesão *	passagem  * passeata * pastilha   * patinete * patriota * pé de pato * pedestal   * pedestre * pediatra *	pedicure  * pedreiro * peixaria   * peixeiro * pelicano *	pen drive * pendurar * penhasco   * penteado * perfumar *	persiana  * pesadelo * pescador   * petróleo * pianista *	picareta  * piercing * pimentão   * pincelar * pingente *	pinheiro  * pirâmide * pirulito * pistache * pizzaria  * planador * plumagem   * policial *  político  * poltrona * ponteiro * porteira * porteiro  * prefeito * pregador   * presente * presídio  * presilha * presunto   * princesa * príncipe *	programa  * proibido * projétil   * proteger * pulseira *<br></br>
            <span>Q</span> * quebrado  * queimada * queimado * quitanda <br></br>
            <span>R</span> * rabanada  * rabanete * rabiscar   * rapadura * rastejar *	ratazana  * ratoeira * recortar * refletir  * repórter * respirar * retornar * revólver   * roteador *  rouxinol * <br></br>
            <span>S</span> * saborear  * saboroso * salpicão * salsicha *	sandália* sapo-boi * sardinha * sargento  * satélite * saxofone * secadora *	semáforo* sequilho   * serenata * serpente * socorrer   * soldador * sombrero * suplicar   * suricato   * surucucu * sushiman *suspirar  *<br></br>
            <span>T</span> * talharim  * tamanduá * tambaqui   * tamborim * tanajura * tatuador  * tatuagem * taturana   * telefone * temperar * terminar * tirolesa   * torneira * torresmo * toupeira * toureiro   * trancado * trânsito * trapézio  * tribunal * triciclo   * tricotar * tridente * triturar  * trombone * trompete   * tropeçar * turbante  * <br></br>
            <span>U</span> * uniforme  * uva passa<br></br>   
            <span>V</span> * vaqueiro  * vassoura * velotrol * vencedor * vendedor * ventilar   * vereador * vitamina * voleibol <br></br>
            <span>W</span> * windsurf	<br></br>
        </p>
        </section>

        <section id = "section9">
        <h4>9 Letras</h4>
        <p>	<span>A</span> * abandonar   * abastecer   * abençoado  * abobrinha  * aborrecer * adaptador   * adiantado  * adormecer  * aeroporto  * agasalhar  *	agressivo   * água-viva   * agulheiro  * ajoelhado  * alargador  * alho-poró  *	alimentar   * almôndega   * alpinista   * amanhecer  * amarrotar  *	ampulheta   * andorinha   * angelical   * anoitecer  * apaixonar  *	apicultor   * apimentar   * apodrecer  * apontador  *apressado   * aproximar   * aquarista   * aquecedor  * ararajuba  * arco-íris   * armadilha  * arquiteto  * arrepiado   * asfaltado  * assadeira  *	assombrar   * assustado   * asteroide  * astrônomo  * atropelar   * auditório  * autógrafo  * avalanche   * <br></br>
            <span>B</span> * badminton   * bafômetro   * bagageiro   * bagunçado  * bailarina  * bananeira   * barbatana  * barbeador  * barrigudo   * batedeira   * baterista   * bebedouro  * bem-te-vi  *	berinjela   * beterraba   * betoneira * bicicleta  * blogueiro   * bloqueado   * boiadeiro  * borboleta  * bracelete  * brilhante   * brinquedo   * bronzeado   *<br></br>
            <span>C</span> * cabideiro   * cachalote   * cachoeira   * cafeteira  *	cafeteria  * cajuzinho   * calabresa  * calcanhar  *	caldeirão   * calopsita   * calorento   * camareira  * campainha  *	camuflado   * candeeiro   * caneleira  * carambola  *	carinhoso   * carnívoro   * carrapato * carrossel  * carruagem   * casadinho  * casamento  *	casquinha   * cassetete   * catapulta   * cavaleiro  * cebolinha  * cemitério   * centopeia   * cerejeira   * chá gelado * champanhe  *	chantilly   * chimarrão   * chimpanzé   * chinchila  * chiqueiro  *	chocolate   * chocotone   * churrasco   * cientista  * cirurgião  * clarinete   * clavícula   * cochichar   * comedouro  * comemorar  *	companhia * conectado   * congelado * construir   * contagiar  * contramão  * contrário   * contratar   * conversar   * corcovado  * costeleta   * crocodilo * crucifixo  *  <br></br>  
            <span>D</span> * dançarino   * decorador   * dentadura  * depositar  *	desbotado   * descansar   * descascar   * descobrir  * desligado  * despencar   * despertar   * digitador   * diplomata   * dirigível* distância  * divertido * dobradiça  * doméstica  *<br></br>     
            <span>E</span> * embalador   * embalagem   * embrulhar   * empacotar  * empolgado  * encanador  * encostado  * enfeitado   * engessado   * engraçado   * engraxate  * enjaulado  * ensaboado   * entediado   * erva-doce   * escorpião  * escoteiro  *	escultura   * espaguete   * espanador   * espantado  * espetinho   * espinafre   * esponjoso   * esqueleto  * estilista  * estudioso   * exposição <br></br>
            <span>F</span> * fantasiar * faxineiro   * fechadura  * fedorento  * ferradura * figurinha  *	filmadora * fio dental  * fita crepe * flautista  * fliperama   * fotógrafo   * framboesa   * frentista  * furadeira   *<br></br>
            <span>G</span> * gafanhoto   * garafa pet  * garçonete   * geladeira  * giz de cera* gladiador   * gorduroso   * gramofone   * guindaste   * guirlanda  <br></br>
            <span>H</span> * heliponto <br></br>
            <span>I</span> * incendiar   * inclinado  * instrutor   * interfone   * intestino   *<br></br>
            <span>J</span> * jiu-jitsu   * joelheira <br></br>   
  	        <span>L</span> * labirinto   * lagartixa   * lamparina   * lancheira  * lapiseira  * lavatório   * limousine   * lobisomem   * localizar  * luminária  *<br></br>
            <span>M</span> * maçã verde  * malagueta * mamadeira * mangueira   * maquiador  * maquiagem  * margarida   * margarina   * maria mole  * marionete  * mascarado  * mentiroso  * mergulhar  * microfone   * milkshake   * minissaia   * minotauro  * modelista  *	monitorar   * mortadela   * motocross  * motorista  * musculoso   * <br></br>      
            <span>N</span> * nadadeira   * namorados  <br></br> 
            <span>O</span> * obesidade   * obstáculo  <br></br>
            <span>P</span> * paintball   * paliteiro   * pão de alho * papai noel * papelaria  * parabrisa   * passa anel  * passarela   * pé de cabra* pedalinho  * pega-pega   * pé-grande   * peixe-boi   * peixe-lua  * peixe-rei  *	peixe-sol   * península * pepperoni  * percevejo  * perfumado   * periquito  * pesquisar  * pizzaiolo  *	plantação   * podadeira  * prancheta  * primavera  *	professor   * protestar  * psicólogo  *<br></br>
            <span>Q</span> * queijeira   * rachadura  * ramalhete * reco-reco  * religioso * repelente * rocambole  * romântico  *<br></br>
            <span>R</span> * rosquinha  <br></br>
            <span>S</span> * sagitário   * sal grosso  * saladeira   * saladeiro  * salto alto * samambaia   * sanduíche   * sapateira   * sapateiro  * sapatilha  *	segurança  * snowboard  * sobremesa  *	sobretudo   * solitário   * sombrinha   * sonâmbulo  * submarino  *	suco de uva *<br></br>
            <span>T</span> * tabuleiro   * tangerina  * tapeceiro  * tarântula   * tartaruga * telefonar  * televisão  *	tico-tico   * tornozelo   * trabalhar   * trampolim   * trem-bala  * triângulo  *	triturado   *<br></br>
            <span>U</span> * unicórnio   * urubu-rei <br></br>   
            <span>V</span> * vaga-lume   * velejador   * velocista   * vestiário  * vídeo game <br></br>
            <span>Z</span> * zoológico  <br></br>
        </p>
        </section>

        <section id = "section10">
        <h4>10 Letras</h4>
        <p>	<span>A</span> * aborrecido * acidentado   * acinturado   * acolchoado  * aconselhar   *	açougueiro   * açucareiro  * agasalhado   * agricultor  * água com gás * água de coco *aguardente   * alcachofra * amadurecer   * amarelinha   * amarrotado   * ambulância   *  apimentado   * aposentado   * arquivista   * arremessar   * astronauta   * aterrissar   *	atravessar   *<br></br>
            <span>B</span> * bala de coco * bala de goma * balconista   *	banana boat  * beija-flor   *	biblioteca   * bilheteiro   * bilheteria   * bioquímico   *	bola de gude * bolo de coco * bolo de fubá * bombardear   *bordadeira   * borrifador   * brigadeiro   * brincalhão   *	britadeira   * bronzeador   * bumerangue   * <br></br>
            <span>C</span> * cabra-cega   * caipirinha   * caixa de som *	calçadeira   * camundongo   *	candelabro   * cappuccino   *	caranguejo   * carcereiro  * carne de sol * carne moída  * carrapicho   * carretilha   * carrocinha   *	cata-vento   * cavanhaque   * cavaquinho   *	 cebola roxa  * cinta-liga   * cobra-cega   * cobra-cipó   * colchonete   * colecionar   * comandante   * comediante   * comprimido   * 	computador   * condomínio   * continente   *	contra filé  * coreógrafo   * costureira   * couve-flor   *	cozinheiro   * cruzamento   * <br></br>  
            <span>D</span> * danceteria   * delineador   * depiladora   * desastrado   * descabelar   * desenhista   * detergente   * dinossauro   * doce de caju *	doce de coco * doce de figo * dorminhoco   * dromedário <br></br>     
            <span>E</span> * embaraçado   *	embrulhado   * empacotado   * empoeirado   *  energético   * enfermeira   * engenheiro   * entregador   * envelhecer   * escorregar   * escritório   *	espantalho   * espartilho   * espingarda   * esportista   *	estilingue   *<br></br>
            <span>F</span> * farinheiro   * fazendeiro   * ferramenta   * filé mignon  * focinheira   * fofoqueiro   * fortalecer   * fotografar   * frigideira   *<br></br>
            <span>G</span> * gargalhada  * garimpeiro   *	garrafa pet  * gel fixador  * grampeador   *	grão de bico * guardanapo   * guarda-sol   * guilhotina   *	<br></br>
            <span>H</span> * hambúrguer   * hidratante   * hipnotizar   * hipopótamo   * <br></br>
            <span>I</span> * ilustrador   * impressora   * inflamável   *	inseticida   * <br></br>
            <span>J</span> * jabuticaba  * jardineira   * jardineiro   * jornaleiro   * jornalista   *  <br></br>   
  	        <span>L</span> * lanchonete   * lantejoula   * lápis de cor * leite em pó * lixa de unha * locomotiva   * luva de boxe *  <br></br>
            <span>M</span> * maçã do amor * manjericão   * manobrista   * maquinista   *	marceneiro   * marimbondo   * marinheiro   * massagista   * mata-mosca   * meia-calça   * mensageiro   * moldureiro   * molho shoyu  * mumificado   * <br></br>      
            <span>N</span> * novelo de lã <br></br> 
            <span>P</span> * paisagista  * pão de forma * pão francês  *	parachoque   * passageiro   * passaporte   * pastelaria   * pasteleiro   * paraquedas   * para-raios   * pau-brasil   * peixe-anjo   * peixe-galo   * peixe-gato   *	peixe-leão   * perfumaria * pergaminho   *	periscópio   * perna de pau * pernilongo   * peste negra  *	pipoca doce * pipoqueiro   * plataforma   *	prateleira * presentear   * presidente   *	pudim de pão *	pular corda  *<br></br>
            <span>R</span> * reciclável * relojoaria   * relojoeiro   *	retrovisor   * revisteiro   * rodoviária   * <br></br>
            <span>S</span> * saci pererê  * sala de aula * salamandra   * salgadeiro   *	salgadinho   * sanfoneiro   * secretária   * soco inglês  * socorrista   * sorridente   *	sorveteira   * sorveteiro   * sorveteria   * suco de maçã * <br></br>
            <span>T</span> * teleférico * telescópio  * tentáculos   * termômetro   * tesoureiro   * torradeira  * transpirar   * triturador   *<br></br>
            <span>U</span> * urso-pardo   * urso-polar  <br></br>   
            <span>V</span> * velocípede   * ventilador  * vidraceiro   * violoncelo    <br></br>

        </p>
        </section>

        <section id = "section11">
        <h4>11 Letras</h4>
        <p>	<span>A</span> * acampamento  * acostamento   * adolescente   *	 algodão doce  * alongamento   * alto falante  * amortecedor   * apartamento   * arco e flecha * arquipélago   * arranha-céu * asa de frango * assombração   *<br></br>
            <span>B</span> * banana split  * banana-maçã   * bandeirinha   * basquetebol   * batata baroa  * batata frita  * batata-doce   * bengala doce  * bola de golfe * bolo de limão *	borracheiro   * <br></br>
            <span>C</span> * café da manhã * caldo de cana * caminhonete  * campo minado  * capa de chuva * capricórnio   * cara ou coroa *	carpinteiro   * carro-forte   * cavalo de pau *	chave de boca * chave de roda *	cobra-coral   * cocada preta  * colher de pau * combustível   * confeiteiro   *	constelação   * conta-gotas   * contrabaixo   * cotoveleira   * creme dental  * cristaleira   *<br></br>  
            <span>D</span> * dedetizador   * desabamento  * desarrumado   *	descabelado   * desconectar   * descongelar   * desodorante   * despertador   * disco voador  * doce de leite * doce de mamão * doce de manga * <br></br>     
            <span>E</span> * eletricista   * entrevistar   * entristecer   *	escapamento * escavadeira   * esconderijo   * escumadeira   * esparadrapo   * esquadrilha   *<br></br>
            <span>F</span> * feijão preto  * festa junina  * figurinista   * fita adesiva  * fita cassete  * flor de lótus * floricultor   * fogão a lenha * formigueiro   *   <br></br>
            <span>G</span> * guitarrista <br></br>
            <span>H</span> * helicóptero <br></br>
            <span>I</span> * inteligente   * interruptor <br></br>
            <span>J</span> * jaguatirica   *<br></br>   
  	        <span>L</span> * laboratório   * lápis de olho * lápis labial  * leite de coco <br></br>
            <span>M</span> * macarronada   * malabarista  * marshmallow   * mergulhador   * metalúrgico   * micro-ondas   * microscópio   *	misto quente  * molho branco  * molho inglês  * montanhismo  * mosquiteiro   * munhequeira   *         <br></br>
            <span>O</span> * óculos de sol * ortopedista   * osteoporose   *	ovo de páscoa *<br></br> 
            <span>P</span> * palestrante   * pão de batata *	pão de queijo * pão integral  * papel toalha  * parabenizar   *	pé de galinha * pé de moleque * pedra-pomes   * pega varetas  * peito de peru * peixe-bolha   * peixe-bruxa   * peixe-corda  * peixe-folha   * peixe-pedra   * peixe-serra   * peixe-zebra   * penteadeira   * petisqueira   * pisca-pisca   * porta-lápis   * porta-luvas   * porta-malas   *<br></br>
            <span>Q</span> * queijadinha   * quero-quero  <br></br>
            <span>R</span> * rasteirinha   * rede de pesca * repolho roxo  *	restaurante   * rinoceronte   * rolo de massa    <br></br>
            <span>S</span> * saboneteira   * saca-rolhas   *  sal de frutas * salto triplo  * salva-vidas   * samba canção  * sanguessuga   * seringueira    * sobrancelha   * suco de limão * suspensório  *<br></br>
            <span>T</span> * telefonista   * tênis de mesa * tigre branco  * tomate seco  * torre de pisa * torre eiffel  * torta de maçã * trabalhador   * trabalhador   *	travesseiro   *<br></br>
            <span>U</span> * unha postiça   <br></br>   
            <span>V</span> * vegetariano   * ventríloquo   * veterinário  * vinho branco  * viúva-negra  <br></br>
        </p>
        </section>

        <section id = "section12">
        <h4>12 Letras</h4>
        <p>	<span>A</span> * achocolatado   * amido de milho * amigo secreto  * apresentador   * arame farpado  * aranha-pavão   * arquibancada   * ascensorista  * aurora boreal  * <br></br>
            <span>B</span> * banana-prata   * batalha naval  * bolsa térmica  * boneco de neve * borboletário   * * brilho labial  *<br></br>
            <span>C</span> * cabeleireiro   * cabelo de anjo * cabo de guerra * café com leite * cama elástica  *  caminhoneiro  *camisa regata  * carro fúnebre  * cartão postal * chá de hortelã * chave de fenda * churrascaria  * cinegrafista   * conjuntivite   * coxa de frango * creme de avelã * creme de leite * creme de milho *<br></br>  
            <span>D</span> * desentupidor   * desinfetante   * disneylândia   *	doce de banana <br></br>     
            <span>E</span> * empilhadeira   * encadernador   * envergonhado   * equilibrista   *	escorregador   * escrivaninha   *<br></br>
            <span>F</span> * farmacêutico   * feijão branco  *	floricultura   * formiga-leão   *<br></br>
            <span>G</span> * guarda-chuva   * guarda-roupa  <br></br>
  	        <span>L</span> * leão-marinho   * leptospirose   * lobo-marinho   * louva-a-deus <br></br>
            <span>M</span> * macaco-prego   * mesa de sinuca *	molho madeira  * motociclismo   * motociclista   * mountain bike  * <br></br>      
            <span>O</span> * ovo de codorna <br></br> 
            <span>P</span> * papel carbono  * paraquedista   * peixe-agulha   * peixe-espada   * peixe-voador   * polo aquático  * pulverizador   *<br></br>
            <span>Q</span> * quebra-nozes   * queijo ralado <br></br>
            <span>R</span> * refrigerante  * roda-gigante <br></br>
            <span>S</span> * salto com vara * sanduicheira   * suco de goiaba * supermercado <br></br>
            <span>T</span> * toalha de mesa * tomate cereja  * tornozeleira   * torta de limão *	transferidor   * trio elétrico  * tubo de ensaio *<br></br>
            <span>U</span> * universidade   *   urso-beiçudo <br></br>   
            <span>V</span> * vídeo cassete  * vôlei de praia <br></br>
        </p>
        </section>

        <section id = "section13">
        <h4>13 Letras</h4>
        <p>	<span>A</span> * açúcar mascavo  * alicate de unha * ambientalista   * aranha-camelo   * aranha-marrom   * arroz integral  * aspirador de pó * automobilismo   * azeitona preta  *<br></br>
            <span>B</span> * bibliotecário   * bola de cristal * bolo de abacaxi * bolo de cenoura * bolo de laranja * bolo de morango * <br></br>
            <span>C</span> * caça ao tesouro * caça submarina  * caixa de isopor * camisa de força * cardiologista  * carrinho de mão * cerca elétrica  * chá de camomila * churrasqueira *coliseu de roma * condicionador   * copo-de-leite   * <br></br>  
            <span>D</span> * doce de abacaxi * doce de abóbora * doce de morango * doce de pêssego <br></br>     
            <span>E</span> * entrevistador   * escada rolante  * escova de dente * estabilizador <br></br>
            <span>F</span> * filtro de linha * filtro de papel * fones de ouvido *	formiga-verde   * forno elétrico  * frango-xadrez   *   <br></br>
            <span>J</span> * joão-de-barro  <br></br> 
            <span>M</span> * macaco-aranha   * molho agridoce  * molho barbecue  *	molho de tomate * mousse de limão * mula sem cabeça *<br></br>      
            <span>N</span> * nutricionista  <br></br> 
            <span>P</span> * palito de dente * pão-de-açúcar  * papel de parede * papel laminado  * pastel de belém * peito de frango * peixe elefante * peixe-morcego   * peixe-palhaço   * pepino-do-mar   * porco-espinho   * porta-retrato * protetor solar  *<br></br>
            <span>Q</span> * quebra-cabeça   <br></br>
            <span>R</span> * radio gravador  * recém-nascido   * recepcionista   * retroprojetor   * rouba bandeira  * <br></br>
            <span>S</span> * salto em altura * serra elétrica  * sopa de legumes * suco de abacaxi * suco de laranja * suco de morango * <br></br>  
            <span>V</span> * vaso sanitário  <br></br>
        </p>
        </section>

        <section id = "section14">
        <h4>14 Letras</h4>
        <p>	<span>A</span> * abridor de latas * agulha de crochê * aniversariante   *	ar condicionado * árvore de natal * <br></br>
            <span>B</span> * barra de cereais * bicho de pelúcia * bicho-preguiça   *	bola de boliche * bolinho de chuva * bolo de maracujá *<br></br>
            <span>C</span> * cachorro quente  * cadeira de praia * caixa de correio * caixa de papelão * caminhão de lixo * cana-de-açúcar   * carrinho de bebê * cavalo-marinho  * chefe de cozinha * cílios postiços  * código de barras * coelho da páscoa * controle remoto  * cortador de unha * creme de abóbora *	cristo redentor  *<br></br>  
            <span>D</span> * dermatologista <br></br>     
            <span>E</span> * estacionamento   * estrela cadente  *	estrela-do-mar   * extraterrestre   *  <br></br>
            <span>F</span> * feijão manteiga  * fisiculturismo   * futebol de areia * futebol de botão *<br></br>
            <span>G</span> * garrafa térmica  * grampo de cabelo <br></br>
            <span>H</span> * halterofilismo  <br></br>
            <span>I</span> * instrumentista <br></br>
            <span>J</span> * jogador de vôlei <br></br>   
  	        <span>L</span> * lente de contato * liquidificador <br></br>
            <span>M</span> * massoterapeuta   * molho de pimenta * montanha-russa   * mosquito-prego   * muralha da china *<br></br>      
            <span>N</span> * nariz de palhaço <br></br> 
            <span>O</span> * oftalmologista   * ônibus espacial <br></br>
            <span>P</span> * pão australiano  * papel higiênico  * pato de borracha *	peixe-lanterna   * peixe-trombeta   * <br></br>
            <span>R</span> * rede de descanso * relógio de pulso * rolo compressor <br></br>
            <span>S</span> * saco de plástico * salada de frutas * suco de maracujá <br></br>
            <span>T</span> * telefone sem fio * tigre de bengala * tinta de cabelo * torta de pêssego * transatlântico   * tubarão-baleia   * tubarão-branco <br></br>
        </p>
        </section>

        <section id = "section15">
        <h4>15 Letras</h4>
        <p>	<span>A</span> * arremesso de peso * artista plástico<br></br>
            <span>B</span> * banheiro químico  * biscoito da sorte * bolo de chocolate * bolo formigueiro  * bote salva-vidas  * <br></br>
            <span>C</span> * cadeira de rodas * caixa de fósforo * cadeira elétrica * camarão empanado  * carrinho de feira * cartão de crédito * cartucho de tinta * casquinha de siri * chocolate amargo  * chocolate branco  * chocolate quente  * colchão inflável  * colete cervical  *coração de frango * cortador de grama  *  coruja-orelhuda *  <br></br>   
            <span>E</span> * engenheiro civil  * esconde-esconde   * <br></br>
            <span>F</span> * faixa de pedestre * flor de cerejeira <br></br>  
  	        <span>L</span> * lanterna chinesa  * leite condensado  * lista telefônica<br></br>
            <span>M</span> * macaco-narigudo   * marcador de texto * mesa de ping-pong * microbiologista   * mousse de morango *<br></br>      
            <span>P</span> * palito de fósforo * panela de pressão * papagaio-do-mar   * peixe-borboleta   * personal trainer  * planta carnívora  * posto de gasolina *<br></br>
            <span>R</span> * raquete elétrica  <br></br>
            <span>S</span> * secador de cabelo *<br></br>
            <span>T</span> * torta de maracujá * tubarão-martelo<br></br>
        </p>
        </section>

        <section id = "section16">
        <h4>16 Letras</h4>
        <p>	<span>A</span> * abridor de garrafa * antena parabólica  * apontador de lápis  <br></br>
            <span>B</span> * bolo de brigadeiro <br></br>
            <span>C</span> * cachorro-vinagre   * cadeira de balanço * carrinho de rolimã * cartão telefônico  * chapinha de cabelo * cinto de segurança * coração de galinha * cuidador de idosos * <br></br>  
            <span>D</span> * dança das cadeiras * detector de fumaça * detector de metais<br></br>     
            <span>E</span> * espremedor de alho * estatueta do oscar <br></br>
            <span>F</span> * fogos de artifício * futebol americano <br></br>
            <span>J</span> * jogador de futebol<br></br>   
  	        <span>L</span> * liquidificador <br></br>
            <span>M</span> * máscara cirúrgica  * mousse de maracujá <br></br>      
            <span>N</span> * nado sincronizado  <br></br> 
        </p>
        </section>

        <section id = "section17">
        <h4>17 Letras</h4>
        <p>	<span>B</span> * bolinho de bacalhau <br></br>
            <span>C</span> * caixa registradora <br></br>  
            <span>D</span> * depilador elétrico<br></br>     
            <span>E</span> * entregador de pizza * estojo de maquiagem <br></br>
            <span>G</span> * gelatina de morango <br></br>
  	        <span>L</span> * lançamento de dardo * lançamento de disco  <br></br>
            <span>M</span>  * máscara de mergulho * mico-leão-dourado   * mousse de chocolate <br></br>      
            <span>P</span> * perfurador de papel * prendedor de cabelo  <br></br>
            <span>S</span> * sorvete napolitano <br></br>
        </p>
        </section>

        <section id = "section18">
        <h4>18 Letras</h4>
        <p>	<span>C</span> * caixa de ferramentas  * chocolate granulado <br></br>      
            <span>E</span> * engenheiro mecânico   * escorredor de pratos * espremedor de frutas * estátua da liberdade * extintor de incêndio <br></br>
            <span>F</span> * ferro de passar roupa *   fritadeira elétrica <br></br>
            <span>M</span>  * máquina fotográfica   * muro das lamentações  <br></br>      
            <span>P</span> * praça de alimentação <br></br>
        </p>
        </section>

        <section id = "section19">
        <h4>19 Letras</h4>
        <p> <span>B</span> * besouro-rinoceronte <br></br>
            <span>C</span> * carrinho de bate-bate<br></br>  
            <span>M</span> * macarrão instantâneo  * máquina de lavar louça * máquina de lavar roupa <br></br>      
        </p>
        </section>

        <section id = "section20">
        <h4>20 Letras</h4>
        <p>	<span>A</span> * aranha-caranguejeira <br></br>
            <span>C</span> * certidão de nascimento <br></br>    
            <span>E</span> * escorredor de macarrão <br></br>
        </p>
        </section>

        <section id = "section21">
        <h4>21 Letras</h4>
        <p>	<span>E</span> * engenheiro de alimentos <br></br>
        </p>
        </section>

        <section id = "section22">
        <h4>22 Letras</h4>
        <p>	<span>C</span> * cegonha-bico-de-sapato <br></br>  
        </p>
        </section>

      </div>
    </div>
  )
}

export default Lista