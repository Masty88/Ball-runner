import React, {useCallback} from 'react';
import { useScene } from "react-babylonjs";
import {Vector3, StandardMaterial, Space, Color3, PhysicsImpostor} from '@babylonjs/core';
import { RoadProceduralTexture } from '@babylonjs/procedural-textures'


const Player = () => {
    const scene=useScene()
    const ref= useCallback(node =>{
        if(node !== null){
            const playerMaterial= node;
            playerMaterial.emissiveColor= new Color3.FromHexString('#ff9900')
        }
    },[])
    const playerRef=useCallback(node=>{
        if(node !== null){
            const player= node;
            player.checkCollisions= true;
            player.applyGravity= true;
            player.speed= new Vector3(0,0,10)
            player.nextspeed = new Vector3.Zero();
        }
    },[])
    return (
        <sphere
            name="player"
            segments={8}
            diameter={1.8}
            scene={scene}
            position-y={3}
            ref={playerRef}
        >
            <physicsImpostor type={PhysicsImpostor.SphereImpostor} _options={{
                                    mass: 1,
                                    restitution: 0.9,
                              }} />
         <standardMaterial ref={ref} name="player_material"/>
        </sphere>
    );
};

export default Player;
