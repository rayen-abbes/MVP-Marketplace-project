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
        for (let i=0; i<this.state.data.length;i++){
            let data = this.state.data[i]
            if (data){
                try{

                    let content = (
                        <div class="float-child">
                            <img class={`image${i}`} src={require(`./images/${data.picture}`)} alt="" width="300" height="400">
                            </img>
                            <h2>{data.productName}</h2>
                            <p>{data.details}</p>
                            <p>{data.phoneNumber}</p>
                            <p>{data.price}</p>
                            <button>update</button>
                            <button>delete</button>
                        </div>
                    )
                    elements.push(content)
                }
                catch (err){
                    console.log(data)
                    console.log(err)
                }
                

            }
        }
        let add = (
            <div class="float-child">
                <div class="add-button-center">
                    <form method="post" action="http://localhost:5000/addProduct">
                        <p>Picture:</p>
                        <input type="text" name="picture"></input>
                        <p>Name:</p>
                        <input type="text" name="productName"></input>
                        <p>Details:</p>
                        <input type="text" name="details"></input>
                        <p>phone number:</p>
                        <input type="text" name="productName"></input>
                        <p>Prince:</p>
                        <input type="text" name="productName"></input>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        )
        elements.push(add)
        return <div id="float-container">{elements}</div>    
    }
}    

export default App;