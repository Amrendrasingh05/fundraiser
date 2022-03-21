import * as types from './types';


export const teamNameRequest = (data) => ({
    type: types.TEAM_NAME_RESPONSE,
    data,
  });


  export const teamDetailRequest = (data) => ({
    type: types.TEAM_DETAIL_RESPONSE,
    data,
  });


  export const teamSubOrgRequest = (data) => ({
    type: types.TEAM_IS_SUB_ORG_RESPONSE,
    data,
  });

  export const teamDatesRequest = (data) => ({
    type: types.TEAM_DATES_RESPONSE,
    data,
  });


  export const teamNameBackRequest = () => ({
    type: types.TEAM_NAME_BACK_RESPONSE
  });
  
  export const teamDetailBackRequest = () => ({
    type: types.TEAM_DETIAL_BACK_RESPONSE
  });

  export const teamSubOrgBackRequest = () => ({
    type: types.TEAM_SUB_ORG_BACK_RESPONSE
  });

  
  export const teamDatesBackRequest = () => ({
    type: types.TEAM_DATES_BACK_RESPONSE
  });

  export const teamSizeRequest = () => ({
    type: types.TEAM_SIZE_RESPONSE
  });

  export const teamSizeBackRequest = () => ({
    type: types.TEAM_SIZE_BACK_RESPONSE
  });


  export const savefundDetails=(data)=>({
    type: types.FUND_DETAIL_SAVE_REQUEST,
    data,
  })

  export const getfundDetailsResponse=(response)=>({
    type: types.FUND_DETAIL_SAVE_RESPONSE,
    response,
  })


  export const getEventRequest = (data) => ({
    type: types.FUND_DETAIL_REQUEST,
    data
  });


  export const  getEventResponse=(response)=>({
    type: types.FUND_DETAIL_RESPONSE,
    response,
  })

  
  export const  getEventFaild=(response)=>({
    type: types.FUND_DETAIL_FAILED,
    response,
  })


  export const getEventDetailRequest = (data) => ({
    type: types.FUND_DETAILBY_ID_REQUEST,
    data
  });


  export const  getEventDetailResponse=(response)=>({
    type: types.FUND_DETAILBY_ID_RESPONSE,
    response,
  })


  
  
  export const  deleteEventFaild=(response)=>({
    type: types.FUND_DELETE_FAILED,
    response,
  })


  export const deleteEventDetailRequest = (data) => ({
    type: types.FUND_DELETE_REQUEST,
    data
  });


  export const  deleteEventDetailResponse=(response)=>({
    type: types.FUND_DELETE_RESPONSE,
    response,
  })
  