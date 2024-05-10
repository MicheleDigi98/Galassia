import React from "react";
import "./Universe.scss";
import Star from "../Star/Star";

export default class Universe extends React.Component<{}, {}>{
    private _canAddStar(posX: number, posY: number, posZ: number, maxDistance: number): boolean{
        const distance = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2) + Math.pow(posZ, 2));
        const maxCDistance = Math.sqrt(3 * Math.pow(maxDistance, 2));

        const rapp = 1 - (distance / maxCDistance);
        const perc = Math.round(rapp * 100);
        console.log(perc);

        const shArray = new Array(1000).fill(0);
        for(let i = 0; i < perc; i++)
            shArray[i] = 1;
        shArray.sort(() => Math.random() - 0.5);

        return shArray[Math.round(Math.random() * shArray.length)] === 1;
    }

    public render() {
        return (
            <div className={"Universe"}>
                <div className={"center"}>{
                    new Array(1000).fill(0).map(() => {
                        const maxDistance = 1500;

                        let posX = Math.round(-maxDistance + Math.random() * maxDistance * 2);
                        let posY = Math.round(-maxDistance + Math.random() * maxDistance * 2);
                        let posZ = Math.round(-maxDistance + Math.random() * maxDistance * 2);
                        while (!this._canAddStar(posX, posY, posZ, maxDistance)){
                            posX = Math.round(-maxDistance + Math.random() * maxDistance * 2);
                            posY = Math.round(-maxDistance + Math.random() * maxDistance * 2);
                            posZ = Math.round(-maxDistance + Math.random() * maxDistance * 2);
                        }

                        const rotateX = Math.round(Math.random() * 360);
                        const rotateY = Math.round(Math.random() * 360);
                        const rotateZ = Math.round(Math.random() * 360);
                        const size = 1 + Math.random() * 5;
                        return (
                            <Star
                                key={`${posX}${posY}${posZ}`}
                                posX={posX}
                                posY={posY}
                                posZ={posZ}
                                rotateX={rotateX}
                                rotateY={rotateY}
                                rotateZ={rotateZ}
                                size={size}/>
                        )
                    })
                }</div>
            </div>
        );
    }
}
