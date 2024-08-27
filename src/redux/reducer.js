const initialState = {
    searchData: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_DATA':
            return {
                ...state,
                searchData: action.payload
            }
        default:
            return state
    }
}