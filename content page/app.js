import React, { Component } from 'react';
import axios from 'axios';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Table from './Table.js';
import {
    getTableColumnHeaders
} from './app_utils';


class App extends Component {
  constructor(props) {
    super(props);
    this.formAddressFieldChange = this.formAddressFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setTableData = this.setTableData.bind(this);
    this.setTableColumnHeaders = this.setTableColumnHeaders.bind(this)

    this.state = {
      formAddressField: '',
      tableData : {},
      tableColumnHeaders: []
    };
  }

  formAddressFieldChange(e) {
    this.setState({
      formAddressField: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()

    axios({
      method: "post",
      url: "http://localhost:9090/",
      data: {
        address: this.state.formAddressField
      }
    }).then(response => {
      if(response.data){
        this.setTableData(response.data);
        this.setTableColumnHeaders(response.data);
      }
    }).catch(function (error) {
			console.log(error);
		});

  }

  setTableData(responseData) {
    this.setState({ tableData: responseData }) 
  }
  setTableColumnHeaders(responseData) {
    this.setState({ tableColumnHeaders: getTableColumnHeaders(responseData) })
  }
  

  render() {
		const inputFieldStyle = {
			width: "100%"
		}
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />

				<Grid style={{"width": "65%"}}>
					<Row className="show-grid">
						<form onSubmit={this.handleSubmit}>
							<FormGroup controlId="formControlsTextarea" style={{ width: "100%" }}>
								<h5>Enter Address:</h5>
								<FormControl
									id="customerIDFilter"
									value={this.state.formAddressField}
									type="text"
									placeholder="Address"
									style={inputFieldStyle}
									onChange={this.formAddressFieldChange}
								/>
								<br />
								<ButtonToolbar>
									<Button bsStyle="primary" type="submit">Send</Button>
								</ButtonToolbar>
							</FormGroup>
						</form>

						<Table 
							tableData={this.state.tableData}
							tableColumns={this.state.tableColumnHeaders}
						/>
          </Row>
				</Grid>


      </div>
    );
  }
}

export default App;