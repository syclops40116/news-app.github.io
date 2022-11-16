import React, { Component } from "react";
import NavBar from "./NavBar";
import News from "./News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
class App extends Component {

  name = "Faiz";
  render() {
    return (<>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element = {<News pageSize={20} country="in" category="general" title = "Top Headlines" />} />
        </Routes>
        <Routes>
          <Route path="/entertainment" element = {<News pageSize={20} country="in" category="entertainment" title = "Top Entertainment Headlines"/>} />
        </Routes>
        <Routes>
          <Route path="/business" element = {<News pageSize={20} country="in" category="business" title = "Top Business Headlines"/>} />
        </Routes>
        <Routes>
          <Route path="/health" element = {<News pageSize={20} country="in" category="health" title = "Top Health Headlines" />} />
        </Routes>
        <Routes>
          <Route path="/science" element = {<News pageSize={20} country="in" category="science" title = "Top Science Headlines" />} />
        </Routes>
        <Routes>
          <Route path="/sports" element = {<News pageSize={20} country="in" category="sports" title = "Top Sports Headlines" />} />
        </Routes>
        <Routes>
          <Route path="/technology" element = {<News pageSize={20} country="in" category="technology" title = "Top Tech Headlines" />} />
        </Routes>
      </Router>
    </>)
  }
}

export default App; 
