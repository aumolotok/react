import { BasePropsInterface } from "../CommonInterfaces/BaseInterface";
import { TitledProps } from "../CommonInterfaces/TitledInterfaces";

export function Link(props: LinkProps){
    return(
        <a href = {props.href}>{props.title}</a>
    )
}

export interface LinkProps extends TitledProps {
    href: string;
}