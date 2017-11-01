import Category from '../components/Category.js'
import CategoryDetail from '../components/CategoryDetail.js'
import item from '../components/Item.js'
import itemDetail from '../components/ItemDetail.js'


// let initState = [{title:"Category",component:Category,id:1}]
let initState = []
export default (state = initState, action) => {
  switch (action.type) {
    case "loadCategory":
      return action.response
    default:
      return state;
  }
};
