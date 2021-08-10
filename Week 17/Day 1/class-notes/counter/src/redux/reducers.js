import { SEARCH_TEXT } from "./actions"
const initSearch = {
  searchText: ''
}

export const searchReducer = (state = initSearch, action={}) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {...state, searchText:action.payload}
  }
  return {...state}
}
}