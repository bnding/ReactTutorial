//Your First React Hook
// jsdrops.com/rgs1.2

function Button() {

    function logCount() {
        setCounter(counter + 1);
    }

    // javascript destructuring feature to capture two variables in one line
    // Since we are using a counter, the initial state is set to 0
    const [counter, setCounter] = useState(0)

    // JSX supports displaying dynamic expressions if you place them in curly braces  
    // return <button onClick={logCount}>{counter}</button>

    // We can also do...
    // return <button onClick={
    //     function logCount() {
    //       setCounter(counter+1)
    //     }
    //   }>{counter}</button>

    //or do an inline arrow function definition...
    return <button onClick={() => setCounter(counter + 1)}>{counter}</button>

    // CHALLENGE. Start the counter at 5 and double the number on each click (5, 10, 20, 40, 80, ...)
    // const [counter, setCounter] = useState(5)
    // return <button onClick={() => setCounter(counter * 2)}>{counter}</button>
}

ReactDOM.render(
    <Button />,
    document.getElementById('mountNode'),
);