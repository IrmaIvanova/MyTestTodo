import {IItem} from '../../redux/actions'
import { bindActionCreators } from 'redux'
import {changeItem} from '../../redux/actions'
export interface ITodoComponentProps extends IMapTodoComponentStateToProps, IMapTodoComponentsDispatchToProps{
   id:string
}

export type IMapTodoComponentStateToProps = ReturnType<typeof mapStateToProps>
export const mapStateToProps =(state: any, props:any)=>({
    data: state.reducer.list[props.id]
})
export type IMapTodoComponentsDispatchToProps = ReturnType<typeof mapDispatchToProps>
export const mapDispatchToProps=(dispatch:any)=>bindActionCreators({
    changeItem
}, dispatch)