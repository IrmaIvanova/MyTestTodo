import {IItem} from './actions'
export interface IStateItem{
    show: number;
    list: {[key:string]: IItem};
    visibleItems: string[];
 
}