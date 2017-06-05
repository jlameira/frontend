const INITIAL_STATE = {
  description: '',
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGE':
      return { ...state,
        description: action.payload //valor que vai estar no campo input cujo evento foi disparado
      }
    case 'TODO_SEARCH':
      return { ...state,
        list: action.payload.data
      }
    case 'TODO_CLEAR':
      return {
        ...state,
        description: ''
      }
    default:
      return state
  }

}