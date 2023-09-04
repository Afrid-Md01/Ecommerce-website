import {Button, Table} from 'react-bootstrap';
import './HomeBody.css';

function HomeBody(){
    const clickHandler=()=>{
        alert('Thanks for buying the Ticket')
    }
    return(
        <div className="bodyDiv">
        <h2 style={{marginBottom:'40px', fontFamily:'fantasy'}}>TOURS</h2>
      <Table striped>
        <tbody>
          <tr >
            <td>JUL 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <Button variant="primary" onClick={clickHandler}>Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>JUL 19</td>
            <td>TORONTO, ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <Button variant="primary" onClick={clickHandler}>Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>JUL 22</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button variant="primary" onClick={clickHandler}>Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>JUL 29</td>
            <td>PHEONIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td>
              <Button variant="primary" onClick={clickHandler}>Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>AUG 2</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button variant="primary" onClick={clickHandler}>Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>AUG 7</td>
            <td>CONCORD, CA</td>
            <td>CONCORD PAVILION</td>
            <td>
              <Button variant="primary" onClick={clickHandler}>Buy Tickets</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    )
}

export default HomeBody;