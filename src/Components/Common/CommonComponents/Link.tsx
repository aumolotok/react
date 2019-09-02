import { BasePropsInterface } from "../CommonInterfaces/BaseInterface";
import { TitledProps } from "../CommonInterfaces/TitledInterfaces";
import React from 'react';

export function Link(props: LinkProps){
    return(
        <a href = {props.href} className = {props.className}>{props.title}</a>
    )
}

export interface LinkProps extends TitledProps {
    href: string;
}