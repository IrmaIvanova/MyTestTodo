import React, { FC } from 'react'
import { connect } from 'react-redux'
import { IItemProps, mapStateToProps, mapDispatchToProps } from './Item.index'

const ItemPresenter: FC<IItemProps> = ({ data, changeItem, onClickSave }) => {

    const onSave=()=>{
        // onClickSave();``
        changeItem({id: data.id, data: {...data, edited: !data.edited }})
    }
    return (
        <div>
            {/* <input value={data.name} type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const newValue = e.currentTarget.value;
            }} /> */}
            <input value={data.name} type="text" onChange={(e: any) => {
                changeItem({ id: data.id, data: { ...data, name: e.target.value } })
            }} />
            <button onClick={onSave} > Save</button>

        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemPresenter)