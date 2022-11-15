import React from "react";
class SearchBar extends React.Component{
    state={
        input:""
    }
    // always use arrow function in class based components to avoid some error
     onInputChange =(e)=>{
        this.setState({
            input:e.target.value
        }) 
    } 
    onFormSubmit=(e)=>{
        e.preventDefault()

        this.props.onTheSearchSubmit(this.state.input)
        //dekh function component m direct props.onTheSearchSubmit s acess kar sakte h but yaha 
        //this.props use karna padhta h

    }
   
    render(){ 
        return(

            <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
            <label>Image Search</label>
            <input value={this.state.input} onChange={this.onInputChange} />
         </div>
            </form>
            </div>
        
        )
    }
}     
export default SearchBar

 // onInputChange(e){
    //     this.setState({
    //         input:e.target.value
    //     }) 
    // console.log(this.state.input);
    // }