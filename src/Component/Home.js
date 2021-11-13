import {Button,Card} from "react-bootstrap";
import { Link } from "react-router-dom"
import "./Home.css"


function Home({ list }) {

  return (
    <div  >
      {
        list && (
          list.map(item => {
            
            // let color = item.show.status === "Running" ? "green" : "red"
            return (
              <div  key={item.show.id}>
                <Card style={{ width: '18rem',display:"block",margin:"auto",textAlign:"center"}}>
                <img src={item.show.image.medium} alt={item.show.name} />
            <Card.Body>
              <Card.Title>
                <h4>{item.show.name}</h4>
              </Card.Title>
                <Button variant="danger" className="show-details-btn"><Link style={{ textDecoration: "none", color: "white" }} to={{
                  pathname: `/data/${item.show.id}`
                }}>show details</Link></Button>
              </Card.Body>
            </Card>
               
            
               
                
                {/* <p>Status: <span style={{ color: color }}>{item.show.status}</span></p>
                <p>Average Runtime: {item.show.averageRuntime}</p>
                <p>Premiered: {item.show.premiered}</p>
                <label htmlFor="officialSite">Official Site: </label>
                <a style={{ textDecoration: "none", color: "blue" }} href={`${item.show.officialSite}`}>{item.show.officialSite}</a><br /><br /> */}
                
              </div>
            )
          })
        )
      }
    </div>
  )
}
export default Home;