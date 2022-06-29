import React from "react";
import axios from "axios";


class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios("http://localhost:5000/products").then(res =>{
            this.setState({
                data:res.data
            })
        })
    }
    render(){
        const elements = [
        
            <div>
                <h1 id="title">Marketplace</h1>
            </div>
        ]
        /* 
            * id
            * productName
            * details
            * phoneNumber
            * price
            * picture
        */
        for (let i=0; i<this.state.data.length;i++){
            let data = this.state.data[i]
            if (data){
                console.log(data)

                let content = (
                    <div>
                        <img class="image3" src={require(`./images/${data.picture}`)} alt="" width="300" height="400">
                        </img>
                        <h2>{data.productName}</h2>
                        <p>{data.details}</p>
                        <p>{data.phoneNumber}</p>
                        <p>{data.price}</p>
                    </div>
                )
                elements.push(content)

            }
        }
        return elements    
    }
}    

export default App;