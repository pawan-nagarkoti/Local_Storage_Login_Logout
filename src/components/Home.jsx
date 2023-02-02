import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem('userdetail')
        navigate('/')
    }
  return (
    <>
       <h1>Welcome to home page</h1>
       <button className="btn btn-primary" onClick={handleLogout}>
        Logout
       </button>
    </>
  )
}

export default Home