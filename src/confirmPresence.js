import { React, Component } from 'react'
import TutorialDataService from "./services/tutorial.service";
import "./confirmPresence.scss"



export default class ConfirmPresense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            confirmPresence: false,
            isSubmitted: false
        }
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(event) {
        let { name, value,type } = event.target;
        value = type === 'checkbox' ? event.target.checked : value;

        this.setState({
            [name]: value,
            isSubmitted: false
        });
    }

    handleSubmit(event) {

        event.preventDefault();
        const { name, email, confirmPresence } = this.state;
        const data = {
            name: name,
            email: email,
            confirmPresence: confirmPresence
        }

        TutorialDataService.create(data)
            .then((res) => {
                this.setState({
                    name: '',
                    email: '',
                    confirmPresence: false,
                    isSubmitted:true
                });
            })
            .catch((e) => {
                console.log(e);
            });



    }

    render() {
        const { isSubmitted } = this.state;
        return (
            <div className="pt-5 d-flex justify-content-center align-items-center confirm-wrapper ">
                <div>
                    <div className="d-flex justify-content-center mb-5 picture">
                        <img src="../confrimPresence.svg" alt="confirmation" />
                    </div>
                    <form onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="nameImput" className="secondary-color">Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailImput" className="secondary-color">Email</label>
                            <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="emailImput" placeholder="email@domain.com" />
                        </div>

                        <div className="form-group mb-4">
                            <label className="toggle" htmlFor="uniqueID" >
                                <input type="checkbox" name="confirmPresence" className="toggle__input" id="uniqueID" checked={this.state.confirmPresence} onChange={this.handleChange} />
                                <span className="toggle-track">
                                    <span className="toggle-indicator">
                                        <span className="checkMark">
                                            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </span >
                                <span className={this.state.confirmPresence ? 'secondary-color' : 'primary-color'}>
                                    Will you attend the event?
                                </span>

                            </label>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="justify-content-center">
                                <input type="submit" value="CONFIRM PRESENCE" className="btn btn-color" />
                                {isSubmitted && <p className="secondary-color mt-3">Thanks for your confirmation</p>}
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        )
    }
}