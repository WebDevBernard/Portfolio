import Image from "next/image";
export default function Header() {
  return (
    <div className="md:max-w-lg m-auto p-4 flex flex-row text-indigo-900 font-bold justify-between">
      <div>
        <Image
          className="object-scale-down h-16 inline mr-2 border-4 border-indigo-900 rounded-full cursor-pointer"
          src="https://avatars.githubusercontent.com/u/72034695?v=4"
          alt="profile image"
        />
        <p className="text-lg hidden md:inline-block ml-2 ">Bernard</p>
      </div>
      <nav className="flex items-center cursor-pointer">
        <a className="m-2">About</a>
        <a className="m-2">Projects</a>
        <a className="m-2">Contact</a>
      </nav>
    </div>
  );
}
