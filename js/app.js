function Box(){
    return(
        <div class="box">
            <h1>This is Heading</h1>
            <p>This is the e commmerce website</p>
        </div>
    );
}

function App(){
    <div class="row">
        <div class="col">
            <Box />
        </div>
        <div class="col">
            <Box />
        </div>
    </div>
}

ReactDom.render(

    <App />,

    document.getElementById('react-container')
);