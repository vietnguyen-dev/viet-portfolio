import React, { Suspense, useEffect } from 'react'
import styled from "styled-components";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

const ModelDiv = styled.div`
  margin-top: 5%;
  height: 35vh;
  width: 80vw;

  :hover{
    cursor: grab;
  }

  :active{
    cursor: grabbing;
  }

  @media only screen and (min-width: 800px){
    margin-top: 0%;
     width: 40vw;
     height: 55vh;
  }

  @media only screen and (min-width: 1000px){
    transform: translateY(-100px)
  }
`;

const ModelContainer = () => {

  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };
    
    const Model = () =>{
        const gltf = useLoader(GLTFLoader, '/model/me.gltf')
        return <primitive object={gltf.scene} scale={0.065} />;
    }


    return (
      <ModelDiv>
        <Canvas>
          <CameraController />
          <color attach="background" args={["#012E40"]} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 5, 5]} />
        </Canvas>
      </ModelDiv>
    );
}

export default ModelContainer
