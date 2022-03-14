import React, { FC, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { IAppProps, mapStatetoProps, mapDispatchToProps } from './App.index';
import TodoComponent from './blocks/TodoComponent/TodoComponent';

const App: FC<IAppProps> = ({
  list,
  show, 
  vItems,
  showMore
}) => {
  const [state, setState] = React.useState("")
  const listLength = Object.keys(list).length

  // const listIds: any[] = Object.keys(vItems);
  // const listIds = Object.keys(list).slice(0, show)
  // useEffect(()=>{
  //   listIds = Object.keys(list)
  // },[show])

  console.log("visibleItems", vItems)
  // console.log("listIds", listIds)
  return (
    <div className="App">
      {vItems && vItems.map((el: string) => <TodoComponent key={el} id={el} />)}
      {/* {show === list.length ? <div> that`s all </div> : <button onClick={() => showMore( show + 10 )}> Show More</button>} */}
      {show === listLength ? <div> that`s all </div> : <button onClick={() => showMore(show < listLength - 10 ? show + 10 : show + (listLength - show))}> Show More</button>}
    </div>
  );
}


export default connect(mapStatetoProps, mapDispatchToProps)(App);
