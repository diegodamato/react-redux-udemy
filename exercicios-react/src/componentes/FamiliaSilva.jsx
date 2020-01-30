import React from 'react'
import Membro from './Membro'

export default props =>
    <div>
        <Membro nome="Rafael" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Daniela" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Pedro" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Ana" sobrenome={props.sobrenome}></Membro>
    </div>
