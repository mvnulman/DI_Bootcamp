export const SEARCH_TEXT = 'SEARCH_TEXT';

export const search = ( text ) => {
  return {
    type: SEARCH_TEXT,
    payload: text
  }
}