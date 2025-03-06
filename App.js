const heading=React.createElement("h1",{},"hello world from React");
const root= ReactDOM.createRoot( document.getElementById("root"));
root.render(heading);

<div id="parent">
       <div id="child">
            <h1>hellow</h1>
        </div> 
</div>
// ReactElement(Object)=>html browser  */
// }

// for this type of structure
const parent = React.createElement(
        "div", // Outer div
        { id: "parent" }, // Attributes of the outer div
        React.createElement( // Nested child div
            "div",
            { id: "child" },
            React.createElement("h1", {}, "I'm an h1 tag") // Grandchild h1 tag
        )
    );
console.log(parent);
    