import React, { FC, useState } from 'react'
import { ITodoComponentProps, IMapTodoComponentStateToProps,IMapTodoComponentsDispatchToProps,mapDispatchToProps, mapStateToProps } from './TodoComponent.index'
import { connect } from 'react-redux'
import Item from '../Item/Item'
const TodoComponent: FC<ITodoComponentProps> = ({ data, changeItem}) => {
    // const [edit, setEdit] = useState(false)
    // console.log(data)
    return <div>
        {
           data.edited ? <Item id={data.id} onClickSave={() =>changeItem({ id: data.id, data:{...data, edited:!data.edited} })} /> : <div>
                <label>
                    <input type="checkbox" onClick={()=>changeItem({id:data.id, data:{...data, checked: !data.checked}})}/>
                    {data.name}
                </label>
                <button onClick={() => changeItem({ id: data.id, data:{...data, edited:!data.edited} })} > Edit</button>
            
            </div>
        }
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent)