import { Canvas } from "@react-three/fiber";
import css from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=" w-screen h-screen">
      <Canvas
        shadows={true}
        className="bg-[#000]"
        camera={{
          position: [-6, 7, 7],
        }}
      >

      </Canvas>
    </div>
  );
}