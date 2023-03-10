import * as types from '../../actions/events/types';

const initialState = {
    loading: false,
    error: null,
    success: null,
    data: [],
    isTeam: true,
    teamType: false,
    isSubOrg: false,
    isDate: false,
    teamMember: false,
    EventAdded: false,
    event_id: [],
    users: [],

    funds: [],
    order:"",
    payment:""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TEAM_NAME_RESPONSE:

            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                isTeam: false,
                teamType: true
            };
        case types.TEAM_NAME_BACK_RESPONSE:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                isTeam: true,
                teamType: false,
                isSubOrg: false,
                isDate: false,
                teamMember: false
            };

        case types.TEAM_DETAIL_RESPONSE:

            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                isTeam: false,
                teamType: false,
                isSubOrg: true
            };
        case types.TEAM_DETIAL_BACK_RESPONSE:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                isTeam: false,
                teamType: true,
                isSubOrg: false,
                isDate: false,
                teamMember: false
            };

        case types.TEAM_IS_SUB_ORG_RESPONSE:

            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                isTeam: false,
                teamType: false,
                isSubOrg: false,
                isDate: true
            };
        case types.TEAM_SUB_ORG_BACK_RESPONSE:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                isTeam: false,
                teamType: false,
                isSubOrg: true,
                isDate: false,
                teamMember: false
            };
        case types.TEAM_DATES_RESPONSE:

            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                isTeam: false,
                teamType: false,
                isSubOrg: false,
                isDate: false,
                teamMember: true
            };

        case types.TEAM_DATES_BACK_RESPONSE:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                isTeam: false,
                teamType: false,
                isSubOrg: false,
                isDate: true,
                teamMember: false
            };
        case types.TEAM_SIZE_RESPONSE:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                isTeam: false,
                teamType: false,
                isSubOrg: false,
                isDate: false,
                teamMember: false,
                EventAdded: true
            };

        case types.TEAM_SIZE_BACK_RESPONSE:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                isTeam: false,
                teamType: false,
                isSubOrg: false,
                isDate: false,
                teamMember: true,
                EventAdded: false
            };
        case types.FUND_DETAIL_SAVE_REQUEST:
            return { ...state, loading: true, error: '' };

        case types.FUND_DETAIL_SAVE_RESPONSE:
            return {
                ...state,
                loading: false,
                data: action.response.data,
                error: false,
                success: true,
                isTeam: false,
                teamType: false,
                isSubOrg: false,
                isDate: false,
                teamMember: false,
                EventAdded: true
            };
        case types.FUND_DETAIL_SAVE_FAILED:
            return { ...state, loading: false, error: action.error };
        case types.FUND_DETAIL_REQUEST:
            return { ...state, loading: true, error: '' };

        case types.FUND_DETAIL_RESPONSE:
            return {
                ...state,
                loading: false,
                data: action.response.data,
                error: false,
                success: true,
                isTeam: null,
                teamType: null,
                isSubOrg: null,
                isDate: null,
                teamMember: null,
                EventAdded: null
            };
        case types.FUND_DETAIL_FAILED:
            return { ...state, loading: false, error: '', data: [] };

        case types.FUND_DETAILBY_ID_REQUEST:
            return { ...state, loading: true, error: '' };

        case types.FUND_DETAILBY_ID_RESPONSE:
            return {
                ...state,
                loading: false,
                event_id: action.response.data,
                users:action.response.users,
                error: false,
                success: true,
                isTeam: null,
                teamType: null,
                isSubOrg: null,
                isDate: null,
                teamMember: null,
                EventAdded: null,
                data: []
            };

        case types.FUND_DELETE_REQUEST:
            return { ...state, loading: true, error: '' };

        case types.FUND_DELETE_RESPONSE:
            return {
                ...state,
                loading: false,
                event_id: action.response.data,
                error: false,
                success: true,
                isTeam: null,
                teamType: null,
                isSubOrg: null,
                isDate: null,
                teamMember: null,
                EventAdded: null,
                data: []
            };

        case types.FUND_DELETE_FAILED:
            return { ...state, loading: true, error: '' };



        case types.FUND_REQUEST:
            return { ...state, loading: true, error: '' };

        case types.FUND_RESPONSE:
            return {
                ...state,
                loading: false,
                funds: action.response.data,
                error: false,
                success: true
            };
        case types.FUND_FAILED:
            return { ...state, loading: false, error: action.error };


        case types.ADD_CART_REQUEST:
            return { ...state, loading: true, error: '' };

        case types.ADD_CART_RESPONSE:
            return {
                ...state,
                loading: false,
                data: action.response.data,
                error: false,
                success: true
            };
        case types.ADD_CART_FAILED:
            return { ...state, loading: false, error: action.error };



            case types.GET_CART_REQUEST:
                return { ...state, loading: true, error: '' };
    
            case types.GET_CART_RESPONSE:
                return {
                    ...state,
                    loading: false,
                    data: action.response.data,
                    error: false,
                    success: true
                };
            case types.GET_CART_FAILED:
                return { ...state, loading: false, error: action.error };


                case types.ADD_ORDER_REQUEST:
                    return { ...state, loading: true, error: '' };
        
                case types.ADD_ORDER_RESPONSE:
                    return {
                        ...state,
                        loading: false,
                        order: action.response.data,
                        error: false,
                        success: true
                    };
                case types.ADD_ORDER_FAILED:
                    return { ...state, loading: false, error: action.error };

                    case types.PAYMENT_DONE_REQUEST:
                        return { ...state, loading: true, error: '' };
            
                    case types.PAYMENT_DONE_RESPONSE:
                        return {
                            ...state,
                            loading: false,
                            payment: action.response.data,
                            error: false,
                            success: true
                        };
                    case types.PAYMENT_DONE_FAILED:
                        return { ...state, loading: false, error: action.error };

        default:
            return state;
    }
};

export default reducer;
