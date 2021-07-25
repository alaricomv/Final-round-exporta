import './exporta_page.css';
import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button, Container, Modal, ModalBody, ModalHeader, FormGroup,ModalFooter} from 'reactstrap';
import { elementRoles } from 'aria-query';
import logo from '../logo.jpg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import jsPDF from 'jspdf';
import small from './exporta.png';


const rfq = [
  {id: 0, buyer: "Beto Enterprise", product: "Board games", supplier: "Fantasy flight", date: "24-07-2021", status: "On progress", comments: "Very good and organized"}
]


class User extends React.Component{

  
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
      modaledit: false,

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


    printPdf = (data) => {

        var counter = 0;
       var list = this.state.rfq;
       list.map((register)=>{
       if(data.id == register.id){

        var doc = new jsPDF('portrait','px','a4','false');
        doc.addImage(small,'png', 10,20,75,45)
        doc.text(280,10,Date().toLocaleString())
        doc.setFont('Helvetica','bold')
        doc.text(175,100,"Exporta Technologies")
        doc.text(200,120,"Date created: "+ data.date)
        doc.text(200,140,"Id: "+data.id)
        doc.text(175,180,"Product: "+data.product)
        doc.text(175,200,"Buyer: "+data.buyer)
        doc.text(175,220,"Supplier: "+data.supplier)
        doc.text(175,240,"Status: "+data.status)
        doc.text(200,260,"Comments: ")
        doc.text(175,280,data.comments)
        doc.save(data.date+'_Sale.pdf')
      }
      counter++;
    })
    this.setState({rfq:list});
    this.closeEdit();
  }
        
    




  editButtonClickHandler(rfq) {
    this.setState({
      buyer: rfq.buyer
    });
  }

  adding=()=>{
    var newvalue={...this.state.form};
    newvalue.id=this.state.rfq.length;
    newvalue.date=Date().toLocaleString()
    var list = this.state.rfq;
    list.push(newvalue);
    this.setState({rfq: list})
    this.handleReset()
  }

  editing=(data)=>{
    var counter = 0;
    var list = this.state.rfq;
    list.map((register)=>{
      if(data.id == register.id){
        list[counter].product = data.product;
        list[counter].buyer = data.buyer;
        list[counter].supplier = data.supplier;
        list[counter].status = data.status;
        list[counter].comments = data.comments;
      }
      counter++;
    })
    this.setState({rfq:list});
    this.closeEdit();
  }

  eliminate=(data)=>{
    var counter=0;
    var list =this.state.rfq;
    list.map((register)=>{
      if(register.id==data.id){
        list.splice(counter,1)
      }
      counter++
    })
    this.setState({rfq:list});
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

  openEdit = (register)=>{
    this.setState({modaledit:true, form:register});
  }

  closeEdit = ()=>{
    this.setState({modaledit:false});
  }
  

  render(){

  return(
    <>


      <Container>
      
      <div className="center">
      <img src={logo} className="logo"></img>
      
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
              <td><Button color= "primary"  onClick={()=>this.printPdf(information)}>PDF</Button> </td>
            </tr>
          ))}
        </tbody>
        
      </Table>

      
    </Container>

    

     
  </>)
  }
}

export default User;