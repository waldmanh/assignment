import { SEARCH_TEXT } from './types';
import config from '../config'
export const searchText = searchText => dispatch => {

  let url = config.itunesUrl + JSON.stringify(searchText.searchText)
  let headers = {
                  headers:{
                  username: config.username
                  }
                }
  fetch(url,headers)
    .then(res=>res.json())
    .then(results =>
      {
        dispatch({
          type: SEARCH_TEXT,
          payload: results
        })
      }
    )
}