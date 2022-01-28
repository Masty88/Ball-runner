import React, {useCallback} from 'react';
import { useScene } from "react-babylonjs";
import {Vector3, StandardMaterial, Space, PhysicsImpostor} from '@babylonjs/core';
import { RoadProceduralTexture } from '@babylonjs/procedural-textures'

const Ground = () => {
    const scene= useScene()
    const ref=useCallback(node=>{
        if(node !== null){
            const roadMaterial = node;
            const roadTexture = new RoadProceduralTexture("road", 256, scene);
            roadMaterial.diffuseTexture= roadTexture;
            roadMaterial.opacityTexture= roadTexture
            roadMaterial.diffuseTexture.uScale = 10;
            roadMaterial.opacityTexture.vScale = 10;
            roadMaterial.specularPower = 10;
        }
    }, []);

    //Todo is that a way to explore??
    // const planeRef=useCallback(node=>{
    //     const plane= node;
    //     plane.position= new Vector3(0,0,0);
    //     plane.size= 120;
    //     plane.rotationx=
    // },[])

    return (
        <>
            <plane name={"ground"}
                   size={120}
                   position={new Vector3(0,0,0)}
                   rotation-x={Math.PI/2}
                   receiveShadows={true}
                   >
                <physicsImpostor type={PhysicsImpostor.BoxImpostor} _options={{
                                        mass: 0,
                                        restitution: 0.9
                                   }} />
                <standardMaterial ref={ref} name="test"  rotate={[new Vector3(0, 1.0, 0.5), Math.PI / 2, Space]} />
            </plane>
        </>
    );
};

export default Ground;
