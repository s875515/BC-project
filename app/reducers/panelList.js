import * as ActionType from '../actions/actionType';
import Category from '../components/Category.js'

const initState = [
  {
    component: Category
  }
]

export default (state = initState, action) => {
  switch (action.type) {
    case ActionType.panel.ADD_PANEL: {
      return [...state, action.panel]
    }
    default:
      return state;
  }
}