import Category from '../components/Category.js'
import CategoryDetail from '../components/CategoryDetail.js'
import item from '../components/Item.js'
import itemDetail from '../components/ItemDetail.js'
import _ from 'lodash'

let initState = [
  {
    loading:false,
    title:"Category",
    component:Category,
  }
]

export default (state = initState, action) => {
  switch (action.type) {
    case "addPanel":
      return [...state, action.payload]
    case "addItemDetailPanel":
      let newList =  [...state]
      newList.splice(action.payload.index+1,0,{title:action.payload.title,component:action.payload.component})
      return newList
    case "addItemListPanel":
      return (checkItemList(state)?
        state.map((i)=>{
          if (i.title !== 'item') {
            return i
          }
          return {
            ...i,
            ...action.payload
          }
        })
      :[...state,{title:action.payload.title,id:action.payload.index+1,component:action.payload.component,data:action.payload.data}])
    case "editCategory":
      return state
    case "requestPosts":
      let newState = _.cloneDeep(state);
      newState.map((panel) =>{
        if (panel.title == action.payload) {
          panel.loading =true
        }
      })
      return newState
    case "loadCategory":
      newState = _.cloneDeep(state);
      newState.map((panel) =>{
        if (panel.title == "Category") {
          panel.loading =false
        }
      })
      return newState
    default:
      return state;
  }
};

const checkItemList = (state) =>{
  let res = false
  state.map((i) =>{
    if (i.title =='item') {
      res =true
    }
  })
  return res
}
const replaceItemList = (state,payload) =>{
  state.map((i) =>{
    if (true) {

    }
    i.title === 'item'?{ ...i, data: payload.data }:i
  })
  return state
}
