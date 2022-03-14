import {IItem} from '../../redux/actions'
import { bindActionCreators } from 'redux'
import {changeItem} from '../../redux/actions'
export interface IItemProps extends IItemOwnProps,IMapDispatchToProps {
    data: IItem
}

export interface IItemOwnProps {
    id: string;
    name: string;
    onClickSave: ()=>void;
}

export const mapStateToProps = (state: any, props: any) => ({
    data: state.reducer.list[props.id]
})

export type IMapDispatchToProps = ReturnType<typeof mapDispatchToProps>

export const mapDispatchToProps=(dispatch: any)=>bindActionCreators({
    changeItem
}, dispatch) 