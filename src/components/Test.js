import React,{Component} from "react";
class Employee extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: 1,
        name: "Dong, Bui Huu",
        address: "Ward 13, District 10, HCMC",
        dob: 1968,
        departmentId: 1
      };
    }
    //method for change Address
    /*
    changeAddress = () => {
        this.setState({address: 'Thang Giang, Thanh Mien, Hai Duong, Viet Nam'});
    }
    */
    changeAddress =(add) => {
        this.setState({address:add})
    }
    render() {
        return (
          <div>
            <h1>Employee Info</h1>
            <ul>
                <li>Id: {this.state.id}</li>
                <li>Name: {this.state.name}</li>
                <li>Address: {this.state.address}</li>
                <li>Dob: {this.state.dob}</li>
                <li>Department Id: {this.state.departmentId}</li>
                
            </ul>
            {/*button for change Address*/}
            <button type="button" onClick={() => this.changeAddress("Hai Duong")}>Change Address</button>
          </div>
        );
      }
  }

export default Employee;