import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavigationBar } from './components/NavigationBar'
import { Footer } from './components/Footer'

import { About } from './pages/About';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { Charts } from './pages/Charts';


function App() {

    return (
        <div>
            <NavigationBar />
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/charts" component={Charts} />
                        <Route path="/about" component={About} />
                        <Route component={Home} />
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default App