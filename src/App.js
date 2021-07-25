
import './App.css';
import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button, Container, Modal, ModalBody, ModalHeader, FormGroup,ModalFooter} from 'reactstrap';
import { elementRoles } from 'aria-query';
import logo from './logo.jpg';


const rfq = [
  {id: 0, buyer: "Beto Enterprise", product: "Board games", supplier: "Fantasy flight", date: "24-07-2021", status: "On progress", comments: "Very good and organized"}
]


class App extends React.Component{

  
    constructor(){
    super();
    this.state = {
      rfq: rfq,
      form: {
        id: '',
        buyer: '',
        product: '',
        supplier: '',
        date: '',
        status: 'Live',
        comments: ''
      },

    };
  }



    handleChange=e=>{
      this.setState({
        form:{
          ...this.state.form,
          [e.target.name]: e.target.value,
        }
      })
    }


  togglePop = () => {
    this.setState({
     seen: !this.state.seen
    });
   };




  editButtonClickHandler(rfq) {
    this.setState({
      buyer: rfq.buyer
    });
  }

  adding=()=>{
    var newvalue={...this.state.form};
    newvalue.id=this.state.rfq.length+1
    newvalue.date=Date().toLocaleString()
    var list = this.state.rfq;
    list.push(newvalue);
    this.setState({rfq: list})
    this.handleReset()
  }

  handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      input => (input.value = "")
    );
    this.setState({
      itemvalues: [{}]
    });
  };
  

  render(){

  return(
    <>

      <Container>
      
      <div className="center">
      <img src={logo} className="logo"></img>
      <br></br>
      <br></br>
      <input type="text" name="buyer" onChange={this.handleChange} placeholder="Enter Buyer…"/>
      <br />

      <br></br>
      <input type="text" name="product" onChange={this.handleChange} placeholder="Enter Product…"
/>
      <br />
      <br></br>
       <input type="text" name="supplier" onChange={this.handleChange} placeholder="Enter Supplier…"
/>
      <br />
      <br></br>
       <input readOnly type="text" name="date" value={Date().toLocaleString()} />
      
      <br />

      <br></br>
        <select name="status" value={this.state.rfq.status} onChange={this.handleChange}>
          <option name="live"> Live</option>
          <option name="dead">Dead</option>
          <option name="progress"> On Progress</option>
          <option name="hold">On Hold</option>
          <option name="completed">Completed</option>
        </select>
      <br />
      <br></br>
      <textarea name="comments" onChange={this.handleChange} placeholder="Type comments..." />
      
      <br />

      <br></br>

      <Button color="primary" onClick={()=>this.adding()}>Add </Button>
      <br></br>
      </div>
      <Table>
        <thead><tr><th>Id</th>
        <th>Buyer</th>
        <th>Product</th>
        <th>Supplier</th>
        <th>Date Added</th>
        <th>Status</th>
        <th>Comments</th></tr></thead>
        <tbody>
          {this.state.rfq.map((information)=>(
            <tr>
              <td>{information.id}</td>
              <td>{information.buyer}</td>
              <td>{information.product}</td>
              <td>{information.supplier}</td>
              <td>{information.date}</td>
              <td>{information.status}</td>
              <td>{information.comments}</td>
              <td><Button color= "primary">Editar</Button> {"  "}
              <Button color= "danger" >Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
        
      </Table>
      
    </Container>

    <Modal>
          <ModalHeader>
           <div><h3>Edit</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Buyer: 
              </label>
              <input
                className="form-control"
                name="personaje"
                type="text"
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Anime: 
              </label>
              <input
                className="form-control"
                name="anime"
                type="text"
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
            >
              Editar
            </Button>
            <Button
              color="danger"
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

     
  </>)
  }
}

export default App;
