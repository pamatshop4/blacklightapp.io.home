import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Image
        src="/landing.png"
        alt="Coming Soon"
        width={1920}
        height={1080}
        className="w-full h-auto block"
        sizes="100vw"
        priority
      />
    </div>
  );
}
