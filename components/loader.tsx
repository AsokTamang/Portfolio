import { Html, useProgress } from "@react-three/drei";

export default function Loader(){
    const {progress}=useProgress();   //this progress from useprogress shows how much how 3d modal is loaded or progressed.
    return(
        <Html className="text-xl font-normal text-center" center>{progress}% Loaded</Html>
    )
}