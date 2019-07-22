// Your First React Component
// jsdrops.com/rgs1.1

function Hello() {
    return <div>Hello React!</div>;
    //actually executing return React.createElement('div', null, 'Hello React!')
}

function Button() {
    return <button>TEST</button>;
}

ReactDOM.render(
    //<Hello /> is actually React.createElement(Hello, null)
    //ALWAYS CAPITALIZE FIRST LETTER. REACT WILL THINK YOU ARE RENDERING AN HTML ELEMENT IF YOU DON'T
    <div>
        <Hello />
        <Button />
    </div>,
    document.getElementById('mountNode')
);

//without JSX, it would be a lot harder to code and maintain...