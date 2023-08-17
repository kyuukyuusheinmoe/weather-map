import React from "react";
import Map from "./components/Map";
import './styles/global.css'

const App = () =>{
    return (<>
                <h1 className="text-red-500">
                    Welcome to Weather Map App
                </h1>
                <div>
                    <Map location={{name:"Yangon", latitude: 16.871311, longitude: 96.199379}}/>
                </div>
            </>
    )
}

export default App