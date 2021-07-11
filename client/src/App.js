import './App.css';
import logo from './logo.png';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Launches from './components/Launches';
import Launch from './components/Launch';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
          <Launches />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
