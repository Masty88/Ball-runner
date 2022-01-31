import React, {useCallback, useRef, useState} from 'react';
import { useScene } from "react-babylonjs";
import { usePersonControls } from "../hooks/usePlayerControls";
import {Vector3, Color3, PhysicsImpostor} from '@babylonjs/core';
import { useRecoilState, useRecoilValue } from "recoil";
import {useBeforeRender} from "babylonjs-hook";
import {CannonJSPlugin} from "@babylonjs/core/Physics/Plugins";
import {gameOverState, playerPositionState} from "../gameState";



const Player = ({position}) => {
    const [playerSpeed,setPlayerSpeed]=useState()

    const scene=useScene()

    const player=useRef()


    const ref= useCallback(node =>{
        if(node !== null){
            const playerMaterial= node;
            playerMaterial.emissiveColor= new Color3.FromHexString('#ff9900')
        }
    },[])

    const {
        forward,
        backward,
        left,
        right,
        jump,
    } = usePersonControls()

 scene.registerBeforeRender(()=>{
     if(forward){
         player.current.position.x +=0.01
     }
    })

    return (
            <sphere
                name="player"
                segments={8}
                diameter={1.8}
                scene={scene}
                position-y={0.9}
                ref={player}
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
