import { loadDataCenter } from './loadDataCenter';
import * as ActionType from './actionType';

export const login = () =>
  (dispatch, getState) => {
    dispatch(
      loadDataCenter(
        'http://bctest.westeurope.cloudapp.azure.com/brandcloud-dev/api/user/signin',
        ActionType.account.LOGIN
      )({
        "email": "0418@gmail.com",
        "password": "12345678"
      })
    ).then(res => {
      dispatch(
        loadDataCenter(
          'http://bctest.westeurope.cloudapp.azure.com/brandcloud-dev/api/user/select/company',
          ActionType.account.SELECT_COMPANY
        )({
          "api_key": getState().login.result.api_key,
          "company_id": 11
        })
      )
    })
  }


export const addPanel = () =>
  (dispatch, getState) => {
    dispatch(
      loadDataCenter(
        'http://bctest.westeurope.cloudapp.azure.com/brandcloud-dev/api/user/company/category/list'
      )
    );
  }