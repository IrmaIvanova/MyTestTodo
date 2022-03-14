export const CHANGE_ITEM = "CHANGE_ITEM";
export const SHOW_MORE="SHOW_MORE";


export interface IItem {
    id: string;
    name: string;
    checked: boolean;
    edited: boolean;
}

export interface ICahgeItemPayload {
    id:string,
    data:IItem
}

export const changeItem = (payload: ICahgeItemPayload) => {
    return {
        type: CHANGE_ITEM,
        payload
    }
}

export const showMore =(payload: number)=>{
    return{
        type:SHOW_MORE,
        payload
    }
}