import { useParams } from "react-router";
import { Link } from "react-router-dom"
import { Button, Form, FormControl, FormGroup, FormLabel, Modal, Image, Container } from "react-bootstrap"
import { useState } from "react";
import "./Summary.css"

function Summary({ list }) {
    const [show, setShow] = useState(false)
    const { id } = useParams()
    const data = list?.find((item) => item.show.id === Number(id))
    let color = (data.show.status === "Running") ? "green" : "red"
    return (
        <>
            <Container fluid>
                <Image src={data.show.image.medium} alt={data.show.name} thumbnail />
                <h1>{data.show.name}</h1>
                <div >
                    <small className="movie-details"><span className="bold-text">Language:  </span>{data.show.language}</small><br />
                    <small className="movie-details"><span className="bold-text">Genres:  </span>  {data.show.genres}</small><br />
                    <small className="movie-details"><span className="bold-text">Runtime:  </span>  {data.show.averageRuntime}</small><br />
                    <small className="movie-details"><span className="bold-text">Status:  </span> <span style={{ color: color }}>{data.show.status}</span> </small><br />
                    <small className="movie-details"><span className="bold-text">Release Date:   </span> {data.show.premiered}</small><br />
                    <p > <span className="bold-text" style={{ textDecoration: "none" }}>Summary: </span>{data.show.summary}</p>
                    <Button variant="danger"><Link className="goBackBtn" to="/">Go Back</Link></Button>
                    <Button variant="danger" style={{ marginBottom: "1rem",marginLeft:"1rem",marginTop:"1rem" }} onClick={() => setShow(true)}>Book Ticket</Button>
                </div>
            </Container>

            <Modal backdrop="static" keyboard={false} show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Book Movie Ticket <h3 style={{ color: "red" }}>{data.show.name}</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup className="mb-3" >
                            <FormLabel>Name</FormLabel>
                            <FormControl type="text" placeholder="Your Name" />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl type="number" placeholder="Your Phone Number" />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel>Show Time</FormLabel>
                            <FormControl type="time" placeholder="Select Time" />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel>Show Date</FormLabel>
                            <FormControl type="date" placeholder="Select Date" />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger">Book Now</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Summary;