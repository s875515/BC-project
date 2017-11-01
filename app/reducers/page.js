import Category from '../components/Category.js'
import CategoryDetail from '../components/CategoryDetail.js'
import item from '../components/Item.js'
import itemDetail from '../components/ItemDetail.js'


let initState = {view:false}

export default (state = initState, action) => {
  switch (action.type) {
    case "loadCategory":
      return {...state,view:true}
    default:
      return state;
  }
};
