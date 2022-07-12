
const initialState =   [
        {   id: 1, solicitante: 'Bruno',  descricao: 'Teste' }
    ]

  
const chamados = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CHAMADO': 
            return state.concat(action.newChamado)
        default: return state
    }
}


export default chamados
