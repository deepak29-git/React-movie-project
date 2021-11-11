import { useParams } from "react-router"
import "./Form.css"


export default function Form({list}){
    const {id}=useParams()
    const data=list?.find(item=>item.show.id==id)

    function submitHandler(event){
       event.preventDefault()
    }

    return(
        <div>
            <form >
            <h2>{data.show.name}</h2>
            <img src={data.show.image.medium} alt="" />
            <p>Language: {data.show.language}</p>
            <p>Genres: {data.show.genres}</p>
            <p>Ratings: {data.show.rating.average}</p>
            <label htmlFor="">Url: </label>
            <a style={{textDecoration:"none" ,color:"blue"}} href={`${data.show.url}`}>{data.show.url}</a>
            

            <h4>YOUR CONTACT DETAILS</h4>
                <label htmlFor="name">NAME</label><br />
                <input type="name" placeholder="Full Name" /><br />
                <label htmlFor="email">E-MAIL</label><br />
                <input type="email" placeholder="Email Address" name="" id="" /><br />
                <label htmlFor="phone">PHONE</label><br />
                <input type="phone" placeholder="Phone Number" name="" id="" /><br />
                
                <button onClick={(event)=>submitHandler(event)} style={{color:"white"}}>Submit</button>
            
               
            </form>
        </div>
    )
}