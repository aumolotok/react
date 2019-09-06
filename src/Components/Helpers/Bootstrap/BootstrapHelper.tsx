import { string } from "prop-types";
import { Grid } from "./Grid/Grid";




export class Bootstrap {
     static  _grid : Grid;

    public static Grid = () => {
        if (Bootstrap._grid == null  || Bootstrap._grid == undefined){
            Bootstrap._grid = new Grid()
        }
        return Bootstrap._grid;
    }

    static container : string = "container";
    static containerFluid : string = "container-fluid";
    static rowClass : string = "row";
}

