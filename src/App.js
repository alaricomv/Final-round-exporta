import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button, Container, Modal, ModalBody, ModalHeader, FormGroup,ModalFooter} from 'reactstrap';
import { elementRoles } from 'aria-query';

const rfq = [
  {id: 0, buyer: "Beto Enterprise", product: "Board games", supplier: "Fantasy flight", date: "24-07-2021", status: "On progress"}
]
class App extends React.Component{

  state = {
    rfq: rfq
  }
  render(){

  return(
    <>

      <Container>
      <br />
      <Button color="primary" >Add </Button>
      <Table>
        <thead><tr><th>Id</th>
        <th>Buyer</th>
        <th>Product</th>
        <th>Supplier</th>
        <th>Date Added</th>
        <th>Status</th></tr></thead>
        <tbody>
          {this.state.rfq.map((information)=>(
            <tr>
              <td>{information.id}</td>
              <td>{information.buyer}</td>
              <td>{information.product}</td>
              <td>{information.supplier}</td>
              <td>{information.date}</td>
              <td>{information.status}</td>
              <td><Button color= "primary" >Editar</Button> {"  "}
              <Button color= "danger" >Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
        
      </Table>
      
    </Container>

     
  </>)
  }
}

export default App;
