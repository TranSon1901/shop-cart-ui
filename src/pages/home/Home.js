import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'
import Slider from '../../components/slider/Slider'
function Home(){
    return(
        <div>
            <Announcement />
            <Navbar/>
            <Slider />
        </div>
    )
}
export default Home