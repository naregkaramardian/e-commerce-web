import React from 'react';
import {Switch , Route} from 'react-router-dom'

// apollo
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

// Components
import Navbar from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'

// pages
import Homepage from './pages/homePage/homepage.component'
import ShopPage from './pages/shopPage/shopPage.component.jsx'

// Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql?",
})

function App() {
  return (
      <ApolloProvider client={client}>
        <div className="App">
            <Navbar />

            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/shop"   component={ShopPage} />
            </Switch>

            <Footer />
        </div>
      </ApolloProvider>
  );
}

export default App;
