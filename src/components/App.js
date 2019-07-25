import React from 'react';
import Header from "./Header"
import Main from "./Main"
import './todosData'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="App">
                <Header/>
                <Main/>
            </div>
        )
    }
}

export default App;
