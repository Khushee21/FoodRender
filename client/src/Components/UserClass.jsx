import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component{

   constructor(props)
   {
    super(props)
    
    this.state={
        // count:0,
        // count1:9,
        userInfo: {
            name: "Dummy",
            location: "Default",
            avatar_url: "", // Default image placeholder
            login: "N/A",
        }
    };

    // console.log("const call");
   }

   async componentDidMount () {
    // console.log("function call");
    const data= await  fetch("https://api.github.com/users/Khushee21");
    const json=await data.json();
    // console.log(json);

    this.setState({
        userInfo: json,
    })
   }

   componentDidUpdate(prevProps , prevState){
    if(this.state.count!==prevState.count){

        
    }
    console.log("ComponnentDidUpdate");
   }

   componentWillUnmount(){
    console.log("componentWillUnmount");
   }

    render(){
        // const {name, location} = this.props;
    
        const {name , location , avatar_url, login} = this.state.userInfo;
        console.log("render call");
        return(
            <div className="userd">
                {/* <h1>Count:{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Click Me
                </button>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count - 1
                    })
                }}>
                    Click Me
                </button> */}
                {/* <h2>Name:{name}</h2>
                <h3>Location: {location}</h3> */}
                 <img src={avatar_url} alt="GitHub Avatar" width="100" />
                <h2>Name: {name || login}</h2>
                <h3>Location: {location || "Not Available"}</h3>
                <h4>Contact: @khushi</h4>
                <div>
                    LoggedIn userd
                    <UserContext.Consumer>
                        {({ loggedInUser})=>(
                            <h1>{loggedInUser}</h1>
                        )}
                        </UserContext.Consumer>
                </div>
            </div>
        );

    }
}

export default UserClass;