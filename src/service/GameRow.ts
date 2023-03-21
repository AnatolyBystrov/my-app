import { CellType } from "../model/CellType";

export default interface GameRow
{
    getInitialRow(): CellType[]; 
    move(id:number): CellType[] | string;
    isOver(): boolean;
}
