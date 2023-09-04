import {Card, Button} from 'react-bootstrap';
import playButton from '../../Images/playButton.png';
function Generics(){
    return(
        <Card
        style={{ height: "auto", backgroundColor: "rgb(101,101,142)" }}
        className="bg mt-1 justify-content-center align-items-center text-light p-3 mb-5"
      >
        <h1 className="font-monospace" style={{ fontSize: "75px" }}>
          The Generics
        </h1>
        <Button size="lg" variant="outline-info" style={{ color: "white" }}>
          Get Our Latest Album
        </Button>
        <button
          className="btn btn-rounded btn-outline"
          style={{ paddingTop: "10px" }}
        >
          <img src={playButton} style={{ width: "100px", height: "auto" }} alt='playButton' />
        </button>
      </Card>
    )
}

export default Generics;