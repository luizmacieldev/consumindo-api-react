import React, { Component } from 'react'
import axios from 'axios';
export default class Autores extends Component {
    state = {
        autores:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(res => {
            const autores = res.data;
            this.setState({autores})
        })
    }
    render() {
        return (
            <div>
                <h1 className="text-center text-info">Lista de Autores</h1>
           
                <ul className="list-group">
                {this.state.autores.map(autor =>
                <div style={{textAlign:"left"}} key={autor.id}>
                <li className="list-group-item" > {autor.title}</li>
                <hr />
                <li className="list-group-item" > {autor.body}</li>
    
                <br />
                </div>
                )}
                </ul>
               
               
            </div>
        )
    }
}
