import React from "react";
import './styles/global.css'
import Search from "./components/Search";
import Layout from "./containers/Layout";
import Chart from './components/Chart'

const App = () =>{
    return (<>
                <Layout>
                    <h1 className="text-blue-500 text-center p-1">
                        Welcome to Weather Map App
                    </h1>
                    <Search/>
                    {/* <Chart/> */}
                </Layout>
            </>
    )
}

export default App