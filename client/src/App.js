import React from "react";


const App =() =>{
    
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
    let content = (
        <div>
            <img class="image3" src={require('./images/test.png')} alt="" width="300" height="400">
            </img>
            <h2>Phone</h2>
            <p>This phone is one of the best here</p>
            <p>22 222 222</p>
            <p>300 dt</p>
        </div>
    )
    elements.push(content)
    return elements;
}

export default App;