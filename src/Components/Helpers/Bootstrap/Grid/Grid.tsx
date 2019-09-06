import { Columns } from "./GridEnums";


export class Grid {
    public container : string = "container";
    public containerFluid : string = "container-fluid";
    public rowClass : string = "row";
    
    public columnClass(columnPostfix : Columns, size: number = 0) : string {

        if (size == 0 &&  columnPostfix == Columns.None) {
            return "col";
        } 

        let resultArray = new Array("col");

        if (columnPostfix != Columns.None){
            resultArray.push(columnPostfix)
        }
        
        if( size != 0) {
            resultArray.push(size.toString())
        }
        return resultArray.join("-");
    }

    public columnSized = (size : number) => this.columnClass(Columns.None, size);

    public smallColumn = (size : number) => this.columnClass(Columns.Sm, size);
    
    public mediumColumn = (size : number) => this.columnClass(Columns.Md,size);

    public largeColumn = (size : number) => this.columnClass(Columns.Lg, size);

    public xLargeColumn = (size : number) => this.columnClass(Columns.Xl, size);



}