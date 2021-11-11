import {Link} from "react-router-dom"

function Home({list}){
  console.log(list)
    return (
      <>
       {
          list && (        
              list.map(item=>{
                let color=item.show.status=="Running" ? "green" : "red"     
                return(
                  <div className="container" key={item.show.id}>
                    <h2>{item.show.name}</h2>
                    <img src={item.show.image.medium} alt="" /><br/>
                    <p>Status: <span style={{color:color}}>{item.show.status}</span></p>
                    <p>Average Runtime: {item.show.averageRuntime}</p>
                    <p>Premiered: {item.show.premiered}</p>
                    <label htmlFor="officialSite">Official Site: </label>
                    <a style={{textDecoration:"none" ,color:"blue"}} href={`${item.show.officialSite}`}>{item.show.officialSite}</a><br /><br />
                    <button className="show-details-btn"><Link style={{textDecoration:"none",color:"white"}} to={{
                      pathname:`/data/${item.show.id}`
                      }}>show details</Link></button>
                  </div>
                )
              })         
          )
        }
      </>
    )
  }
  export default Home;