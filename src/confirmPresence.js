import { React, Component } from 'react'
import { db } from "firebase"
// import "./confirm.css"



export default class ConfirmPresense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            familyCount: ''
        }
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, email, familyCount } = this.state;
        const data = {
            name: name,
            email: email,
            familyCount: familyCount
        }



    }

    render() {
        return (
            <div className="pt-3em">
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label for="nameImput">Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label for="emailImput">Name</label>
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="emailImput" placeholder="email@domain.com" />
                    </div>
                    <div className="form-group">
                        <label for="emailImput">Name</label>
                        <input name="familyCount" type="text" value={this.state.familyCount} onChange={this.handleChange} className="form-control" id="familyCountImput" placeholder="Expected count" />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}