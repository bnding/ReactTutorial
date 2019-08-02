// CHALLENGE. Start the counter at 5 and double the number on each click (5, 10, 20, 40, 80, ...)
const [counter, setCounter] = useState(5)
return <button onClick={() => setCounter(counter * 2)}>{counter}</button>