import store from "./store"
import { CHANGE_ITEM, SHOW_MORE } from './actions'
import { IStateItem } from './interfaces'
export const defaultState: IStateItem = {
    show: 10,
    list: {},
    visibleItems: [],

}

function reducer(state = defaultState, action: any) {
    switch (action.type) {
        case CHANGE_ITEM: {
            return {
                ...state,
                list: {
                    ...state.list,
                    [action.payload.id]: {
                        ...action.payload.data
                    }
                }
            }

        }
        case SHOW_MORE: {
            const listIds = Object.keys(state.list).slice(state.show, state.show+10)
            console.log("listIds",listIds)
            return {
                ...state,
                show: action.payload,
                visibleItems:state.visibleItems.concat(listIds)
                   
                
            }
        }
        default: return state;
    }
}

export default reducer