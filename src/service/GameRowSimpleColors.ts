import { getRandomElement } from "../util/random";
import { CellType } from "../model/CellType";
import GameRow from "./GameRow";
import { getColors } from "../util/colors";


export default class GameRowSimpleColors implements GameRow{
    row :CellType[];
    constructor(nCells: number){
    this.row = Array.from ({length:nCells}).map((__,index) =>
    ({cellColor:getRandomElement(getColors()),borderColor:"black",
    cellContent:"", id:index}))
    }
    getInitialRow(): CellType[] {
        return this.row;
    }
    move(id: number): string | CellType[]{
        let res: string | CellType[];
        if (this.isOver()){
            res = "Game Over";
        }else{
            
            res = JSON.parse(JSON.stringify(this.row));
            const resAr= res as CellType[];
            resAr[id].cellColor ="black";
            this.row = resAr
        }
        return res;
    }
    isOver(): boolean {
        const count: number = 0;
       return this.row.every(cell => cell.cellColor == "black")
    }

}