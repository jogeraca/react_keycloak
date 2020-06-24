import React, { Component } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import PersonList from "./PersonList";

class People extends Component{
    state = {
        people: [],
        valid: null
    };
    componentDidMount() {
        const token =   Cookies.get("liftit-token");
        axios
            .get("http://localhost:5005/persons",
                {headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                    "Access-Control-Allow-Origin": "*"

                }}
            )
            .then(response => {
                console.log(response) ;
                //this.setState(this.state, {people: null, valid: false})
                const newPeople = response.data.map(p => {
                    return {
                        id: p.id,
                        first_name: p.first_name,
                        last_name: p.last_name
                    };
                });
                const newState = Object.assign({}, this.state, {people: newPeople, valid: true});
                this.setState(newState);
            })
            .catch(error => console.log(error));
    }

    render(){
        if (this.state.valid) {
            return (
                <div>
                    create person
                    <header className="App-header">
                        <h1 className="App-title">People List</h1>
                    </header>
                    <PersonList people = {this.state.people} />
                </div>
            );
        }
        else{
            return (<div> no login</div>);
        }
    }
}

export default People;
