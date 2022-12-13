import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'
function Home(){
    return(
        <div>
            <Announcement />
            <Navbar/>
        </div>
    )
}
export default Home