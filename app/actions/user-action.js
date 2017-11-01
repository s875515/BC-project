export const loadCategory = () => {
  return function(dispatch) {
    fetch('http://localhost:3000/category', {method: 'get'})
      .then(function(response) {
        return response.json()
      })
      .then(function(response) {
        dispatch(
          {
            type: "loadCategory",
            response
          }
        )
      })
  }
}
export const reLoadCategory = () => {
  return function(dispatch) {
    dispatch(
      {
        type:"requestPosts",
        payload:"Category"
      }
    )
    fetch('http://localhost:3000/category', {method: 'get'})
      .then(function(response) {
        return response.json()
      })
      .then(function(response) {
        dispatch(
          {
            type: "loadCategory",
            response
          }
        )
      })
  }
}
export const editCategory = () => {
  return function(dispatch) {
    dispatch(reLoadCategory())
  }
}
export const loadItemList = () => {
  return function(dispatch) {
    fetch('http://localhost:3000/item', {method: 'get'})
      .then(function(response) {
        return response.json()
      })
      .then(function(response) {
        dispatch(
          {
            type: "addItemListPanel",
            response
          }
        )
      })
  }
}
