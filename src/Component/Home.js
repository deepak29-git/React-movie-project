import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom"

function Home({ list }) {
  return (
    <div  >
      {
        list && (
          list.map(item => {
            return (
              <div key={item.show.id}>
                <Card style={{ width: '18rem', display: "block", margin: "auto", textAlign: "center" }}>
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
              </div>
            )
          })
        )
      }
    </div>
  )
}
export default Home;