import Image from "next/image";
import Img from "../public/img.jpg"

export default function Home() {
  return (
    <div>
      <h1 className="text-red-500">Home Page</h1>
      <Image 
        src={Img}
        alt="img"
        />
    </div>
  );
}
