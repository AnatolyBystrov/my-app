
import React, { ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Cell } from './components/cell';
import { Reset } from './components/reset';
import { CellType } from './model/CellType';
import { gameActions } from './redux/gameSlice';

function App()
 {
  const cells = useSelector<any, CellType[]| string>(state=>state.gameRow.cells);
  const dispatch = useDispatch();
  function getRow(): ReactNode
  {if (typeof cells == "string")
  {return <div><p>Game is over</p><p><Reset/></p></div>}
    return cells.map(cell => <Cell width={'5vw'} cell={cell} 
    clickFn={function (id: number): void {
    dispatch(gameActions.move(id))
    } }/>)
  }
  return <p><div style={{display:"flex"}}>
  {getRow()}
  </div></p>
}

export default App;
