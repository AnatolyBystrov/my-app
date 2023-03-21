import { CellType } from "../model/CellType";
import GameRowSimpleColors from "./GameRowSimpleColors";

export default class GameRowSwapColor extends GameRowSimpleColors
{
    nCells:number;
    counter:number = 0;
    firstIndex:number = -1;
    
    constructor(nCells:number)
    {
      super(nCells)
      this.nCells = nCells
    }

    move(id: number): string | CellType[] 
    {
        let res: string | CellType[];
        res = JSON.parse(JSON.stringify(this.row))
        if (this.isOver()){
            res = "Game Over";
        }
        if (this.firstIndex === -1) 
        {this.firstIndex = id;}
        else if(this.firstIndex <= id)
        {const resAr = res as CellType[];
        const newAr = resAr.slice(this.firstIndex,id+1);
        const newColor = newAr[0].cellColor
        newAr.forEach(element => {element.cellColor = newColor});
        this.row = resAr;
        this.firstIndex = -1;
        }
        this.counter++;
        return res;
    }

    isOver(): boolean {

       return this.counter == Math.round(this.nCells / 2)
}
}
