import React from "react";
import './styles/global.css'
import Search from "./components/Search";
import Layout from "./containers/Layout";
import Location from "./components/Location";
import Chart from './components/Chart'

const App = () =>{
    return(<>
            <Layout>
                <h1 className="text-blue-500 text-center text-xl pt-4">
                    Welcome to Weather Map App
                </h1>
                <Search/>
                <Location/>
                <Chart/>
            </Layout>
            </>
    )
}

export default App