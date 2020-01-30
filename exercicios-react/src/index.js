import React from 'react'
import ReactDom from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import {CompA, CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hooks'

const elemento = document.getElementById('root')
ReactDom.render(
    <div>
        <Hook/>
        {/* <Contador numeroInicial={100} /> */}
        {/* <ComponenteClasse valor="Sou um componente de classe"></ComponenteClasse> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao></ComponenteComFuncao> */}
        {/* <MultiElementos></MultiElementos> */}
        {/* <CompA valor="Olá eu sou A!" /> */}
        {/* <B valor="B na área" /> */}
        {/* <PrimeiroComponente valor="Bom dia!"></PrimeiroComponente> */}
        {/* <FamiliaSilva sobrenome="Silva Pereira"></FamiliaSilva> */}
        {/* <Familia sobrenome="Pereira"> */}
            {/* <Membro nome="Andre"></Membro> */}
            {/* <Membro nome="Mariana" sobrenome="Pereira"></Membro> */}
        {/* </Familia> */}
    </div>
, elemento)