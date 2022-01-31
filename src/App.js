
import React, {useContext} from "react";
import {Engine, Scene,} from "react-babylonjs";
import { CannonJSPlugin } from '@babylonjs/core/Physics/Plugins'
import { Vector3} from '@babylonjs/core';
import Ground from "./components/Ground";
import Player from "./components/Player";

import * as CANNON from 'cannon';
window.CANNON = CANNON;

const gravityVector = new Vector3(0, -9.81, 0);


const App = () => {

    return (
        <>
            <Engine antialias adaptToDeviceRatio canvasId='my-canvas'>
                    <Scene enablePhysics={[gravityVector, new CannonJSPlugin()]}>
                        <arcRotateCamera name='camera1'  alpha={0} beta={Math.PI / 3} radius={10} target={Vector3.Zero()} />
                        <hemisphericLight name='light1' direction={Vector3.Up()} intensity={0.3} />
                        <Player />
                        <Ground />
                    </Scene>
                </Engine>
        </>
    );
};

export default App;
