import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            counter : 0
        }
        this.handleCount =this.handleCount.bind(this);
    }
    handleCount() {
        this.setState({
            counter : this.state.counter+1
        })
    }
    render(){
        return(
            <div>
                People visited so far is : {this.state.counter}
                <button onClick = {this.handleCount} >Click here</button>
            </div>
        )
    }
}

export default Counter;