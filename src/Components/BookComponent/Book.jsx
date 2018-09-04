import React, { Component } from 'react';
import BookService from '../../Services/bookService'
import {Tabs, Tab,Form} from 'react-bootstrap';
import ReactFileReader from 'react-file-reader';


class Book extends Component {
    constructor (props) {
        super(props)
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBulkSubmit = this.handleBulkSubmit.bind(this); 
      }

      

      handleSubmit (event){
        event.preventDefault();
        console.log(this.state)
        BookService.addToBook(this.state)
      }

      handleBulkSubmit (event){
          event.preventDefault();
          console.log(this.state)
      }

      handleFiles = files => {
          alert(JSON.stringify(files[0]))
        var reader = new FileReader();
        reader.onload = function(e) {
        // Use reader.result
        // alert(reader.result)
        }
      reader.readAsText(files[0]);
        }

      handleChange(event) {
          event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.value)
      }
    
      render () {
        return (
            <div className="container">
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Manual Upload">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="Title">Title:</label>
                    <input name="title" type="text" value={this.state.value} onChange={this.handleChange} className="form-control" id="title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input name="author" type="text" value={this.state.value} onChange={this.handleChange} className="form-control" id="author"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input name="price" type="text" value={this.state.value} onChange={this.handleChange} className="form-control" id="price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="des">Description:</label>
                    <textarea name="description" value={this.state.value} onChange={this.handleChange} type="text" className="form-control" id="des"/>
                </div>
                <div className="form-group">
                    <label htmlFor="rpd">Rent per day:</label>
                    <input name="rentPerDay" value={this.state.value} onChange={this.handleChange} type="text" className="form-control" id="rpd"/>
                </div>
                <div className="form-group">
                    <label htmlFor="rpw">Rent per week:</label>
                    <input name="rentPerWeek" value={this.state.value} onChange={this.handleChange} type="text" className="form-control" id="rpw"/>
                </div>
                <div className="form-group">
                    <label htmlFor="rpm">Rent per month:</label>
                    <input name="rentPerMonth" value={this.state.value} onChange={this.handleChange} type="text" className="form-control" id="rpm"/>
                </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form> 
            </Tab>
            <Tab eventKey={2} title="Bulk Upload">
            {/* <form onSubmit={this.handleBulkSubmit} > */}
                {/* <div className="form-group">
                    <label htmlFor="bulkupload">Bulk Upload here</label>
                    <input type="file" name="file" value={this.state.value} onChange={this.handleChange} className="form-control-file" id="exampleFormControlFile1"/>
                </div> */}
              {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            {/* </form> */}
            <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                <button className='btn'>Upload</button>
            </ReactFileReader>
            </Tab>
            </Tabs>
          </div>
        )
    }
}

export default Book;