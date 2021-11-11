
import { useParams } from "react-router";
import {Link} from "react-router-dom"
import "./Summary.css"



function Summary ({list}){
    
    const {id}=useParams()
   

 const data=list?.find((item)=>item.show.id==id)

    return(
        <div>
            <h2>{data.show.name}</h2>
            <img src={data.show.image.medium} alt=""/>
            <p>{data.show.summary}</p>
            <button>
            <Link style={{textDecoration:"none",color:"white"}} to={{
                pathname:`/form/${data.show.id}`
            }}>Book Movie Ticket</Link>

            </button>
        </div>
    )

}
export default Summary;