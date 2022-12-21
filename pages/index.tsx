import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-500">Home Page</h1>
      <Image 
        src="https://drive.google.com/uc?id=1-i0e6dwq5MbjzHdDIxRLipib_b28v0Fh" 
        alt="img"
        width={100}
        height={100}/>
    </div>
  );
}
