export class ClassHelper {

    private classes : string[];

    constructor(...classes : string[]) {
        this.classes = classes;
    }


    get() {
        return this.classes.join(" ");
    }

    delete(className : string){
        this.classes = this.classes.filter(i => i != className);
    }

    add(className : string ) {
        this.classes.push(className);
    }

    toggle(className : string){
        this.classes.find(i => i == className) == undefined 
            ? this.add(className)
            : this.delete(className)
    }

}