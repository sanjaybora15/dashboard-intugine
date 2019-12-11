import IntugineApi from '../IntugineApi'

export const fetchDataAction = (email,name) => async dispatch => {
    const fromBody = {
       "email":email
    }
    const response = await IntugineApi.post(`/${name}`, fromBody);
    dispatch({ type: "FETCH_DATA", payload: response.data.data });
  };