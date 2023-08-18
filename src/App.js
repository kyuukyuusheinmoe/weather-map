import React from "react";
import './styles/global.css'
import Layout from "./containers/Layout";
import TemperatureSearchView from "./views/TemperatureSearchView";

const App = () => {
    return(<>
            <Layout>
                <h1 className="text-blue-500 text-center text-xl pt-4">
                    Welcome to Weather Map App
                </h1>
                <TemperatureSearchView/>
            </Layout>
            </>
    )
}

export default App