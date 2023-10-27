import Navbar from "./components/navbar/page";
import StickyNavbar from "./components/stickyNav/page";
import Main from "./components/main/page";
export default function Home() {
  return (
    <div>
      <Navbar />
      <StickyNavbar />
      <Main />
    </div>
  )
}
