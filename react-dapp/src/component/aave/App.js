import React from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Proposal from './Proposal';


function AaveApp() {
  const allProposalsQuery = gql`
    query getAllProposals {
      proposals(first: 10) {
        id
        state
        title
        shortDescription
      }
    }`;

  function Proposals() {
    const { loading, error, data } = useQuery(allProposalsQuery);
    if (loading) return <p>Loading...</p>;
    if (error) {
      console.log(error);
      return <p>Error :(</p>;
    }

    return <ul> {
      data.proposals.map(
        function(element, index){
          return <li key={element.id}> <Link to={'/aave/'+element.id} target="_blank"> {element.id}, {element.state}, {element.title}, {element.shortDescription} </Link> </li>;
        })}
      </ul>


  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <h2>Aave Governance Proposals</h2>
            <Proposals />
          </div>
        </Route>
          <Route path="/aave/:id" component={Proposal} />
      </Switch>
    </Router>
  );
}

export default AaveApp;
