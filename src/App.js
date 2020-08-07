import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";// ye bootstrap ka Js hi iss k bina kuch functionallty use ni kar sakte jisay dropdown
import './index.css'

import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Nevbar from './Nevbar'
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';

const App=()=> {
  return (
    <>
    <Nevbar />
    <Switch >{/*iss ka kaam hi url me sabsay pahla match jo mill jaye uss ko show kar dega baki ka code nahi chaleaga */}
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/service" component={Services} />
    <Route path="/contact" component={Contact} />
    <Redirect to="/" />{/*ager koi URL  me galt URL dalega to ye usay home page pe redirect karega*/}
    </Switch>
    <Footer />
    </>
  );
}

export default App;

