const root = ReactDOM.createRoot(document.querySelector('#root'))
// const content = (
//     <div>
//         <h1>Today : {(new Date()).toDateString()}</h1>
//     </div>
// )
function CounterButton(){
    return (
        <div className ="counter">
            <button>+</button>
            <h2>{0}</h2>
            <button>-</button>
            <button>0</button>
            <button>C</button>
        </div>
    )
}
function Counter(){
    return (
        <div className="add-counter">
            <h2>Sum = {0}</h2>
            <button>Add Counter</button>

        </div>
    )
}
function App(){
    return (
        <div>
             <Counter/>
             <CounterButton/>
         </div>
    )
}

root.render(<App/>)