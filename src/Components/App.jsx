import React from "react";
import SearchBar from "./SearchBar";
  class App extends React.Component{
    onSearchSubmit=(term)=>{

    }
    render(){
      return(
        <div>
            <h1>
                <SearchBar onTheSearchSubmit={this.onSearchSubmit}/>
                {/* dekh function m direct = k baad apan prop (here e.g =onSearchSubmit) dal sakte h
                but class based component m this. use karna padta h */}
            </h1>
        </div>
    )
    }

  }

  export default App