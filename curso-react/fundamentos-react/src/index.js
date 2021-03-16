import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'

// const el = document.getElementById('root')
// ReactDOM.render('Olá React!', el)

const tag = <strong>Olá React!</strong>
ReactDOM.render(
    <div>
        { tag }, 
        <p><Primeiro></Primeiro></p>
    </div>,
    document.getElementById('root')
)