import React from 'react'
import { connect } from 'react-redux'

const ListaChamados = (props) => {
  return (
    <div> {props.chamados.map( chamado => {
        return <p key={chamado.id}> {chamado.solicitante} / {chamado.descricao} </p>
    }

    )} </div>
  )
}

const ConnectedListaChamados = connect((state) => {
    return {
        chamados: state.chamados
    }
})(ListaChamados)

export default ConnectedListaChamados
