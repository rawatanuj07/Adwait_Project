import Navbar from "./components/navbar/page";
import StickyNavbar from "./components/stickyNav/page";
import Main from "./components/main/page";
export default function Home() {
  return (
    <div>
      <Navbar />
      <StickyNavbar />
        <hr className="mt-1 h-[0.5px] w-full bg-gray-separator tab:mt-2" />

      <Main />
    </div>
  )
}
