import homePageLogo from "../assets/homePageLogo.png"
import { useContext } from "react"
import { UserContext } from "../Contexts/contexts"
function HomePage() {
    const {user} = useContext(UserContext)
    return (
        <>
            <img src={homePageLogo} className="homePageLogo" />
            <p>Logged in: {user}</p>
        </>
    )
}
export default HomePage