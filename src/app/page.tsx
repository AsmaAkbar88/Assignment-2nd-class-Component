import About from "./Components/About"
import Header from "./Components/Header"


function HomePage (){
  return(<center> 
       <div className=" text-white bg-black font-semibold text-5xl py-60 underline">
      
      <h1>This is a Home page</h1>
      <About/>
      <Header/>
      
      
    </div>
    </center>

  )
}
export default HomePage 