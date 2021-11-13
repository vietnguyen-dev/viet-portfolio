import React, { Suspense } from 'react'
import styled from "styled-components";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelDiv = styled.div`
  margin-top: 5%;
  height: 35vh;
  width: 80vw;

  @media only screen and (min-width: 800px){
     width: 40vw;
  }
`;

const ModelContainer = () => {
    const Model = () =>{
        const gltf = useLoader(GLTFLoader, '/model/me.gltf')
        return <primitive object={gltf.scene} scale={0.065} />;
    }


    return (
      <ModelDiv>
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 10, 10] }}>
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
