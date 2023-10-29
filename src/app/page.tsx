import Navbar from "./components/navbar/page";
import StickyNavbar from "./components/stickyNav/page";
import Main from "./components/main/page";
import VideoSeries from "./components/videoseries/page";
export default function Home() {
  return (
    <div>
      <Navbar />
      <StickyNavbar />
      <Main />
      {/* <VideoSeries /> */}
    </div>
  )
}
