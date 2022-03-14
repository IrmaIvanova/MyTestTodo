import {showMore} from './redux/actions'
import { bindActionCreators } from 'redux'

export interface IAppProps extends IMapAppDispatchToProps, IMapAppStateToProps{}

export type IMapAppStateToProps = ReturnType<typeof mapStatetoProps>
export const mapStatetoProps =(state: any, props:any)=>({
    list: state.reducer.list,
    vItems: state.reducer.visibleItems,
    show: state.reducer.show
})

export type IMapAppDispatchToProps = ReturnType<typeof mapDispatchToProps>
export const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    showMore
}, dispatch)