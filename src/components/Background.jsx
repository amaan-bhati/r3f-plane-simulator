import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import * as THREE from "three";

// background component that creates a gradient sphere environment
export const Background = () => {
  return (
    <>
      {/* add a sunset environment lighting preset */}
      <Environment preset="sunset" />
      {/* large sphere that surrounds the scene */}
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        {/* a layered material with transmission properties */}
        <LayerMaterial
          color={"#ffffff"}
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          {/* a vertical gradient from blue to white */}
          <Gradient
            colorA={"#357ca1"} // blue color
            colorB={"white"} // white color
            axes={"y"} // vertical gradient
            start={0}
            end={-0.5}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
};