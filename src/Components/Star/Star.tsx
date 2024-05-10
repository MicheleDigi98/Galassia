import React, {RefObject} from "react";
import "./Star.scss"

export interface StarProps{
    posX: number,
    posY: number,
    posZ: number,
    rotateX: number,
    rotateY: number,
    rotateZ: number,
    size: number
}

export default class Star extends React.Component<StarProps, {}>{
    private divRef: RefObject<HTMLDivElement> = React.createRef();

    public componentDidMount() {
        if(this.divRef.current){
            const current: HTMLDivElement = this.divRef.current;
            current.style.setProperty("--posX", `${this.props.posX.toString()}px`);
            current.style.setProperty("--posY", `${this.props.posY.toString()}px`);
            current.style.setProperty("--posZ", `${this.props.posZ.toString()}px`);
            current.style.setProperty("--rotateX", `${this.props.rotateX.toString()}deg`);
            current.style.setProperty("--rotateY", `${this.props.rotateY.toString()}deg`);
            current.style.setProperty("--rotateZ", `${this.props.rotateZ.toString()}deg`);
            current.style.setProperty("--size", `${this.props.size.toString()}`);
        }
    }

    public render() {
        return (
            <div ref={this.divRef} className={"Star"}/>
        );
    }
}
