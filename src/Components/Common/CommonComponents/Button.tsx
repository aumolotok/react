import { BasePropsInterface } from "../CommonInterfaces/BaseInterface";
import { TitledProps } from "../CommonInterfaces/TitledInterfaces";

export function Button(props: ButtonProps){
    return(
        <button className = {props.className}>{props.title}</button>
    )
}

export interface ButtonProps extends TitledProps {
    onClick : () => void;
}