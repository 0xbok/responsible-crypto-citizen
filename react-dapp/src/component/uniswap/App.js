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


function UniswapApp() {
  const allProposalsQuery = gql`
    query getAllProposals {
      proposals(first: 20) {
        id
        status
        endBlock
        description
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
          return <li key={element.id}> <Link to={'/uniswap/'+element.id} target="_blank"> {element.id}, {element.status}, {element.endBlock}, {element.description.substring(1,20)}... </Link> </li>;
        })}
      </ul>


  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <h2>Uniswap Governance Proposals</h2>
            <Proposals />
          </div>
        </Route>
          <Route path="/uniswap/:id" component={Proposal} />
      </Switch>
    </Router>
  );
}

export default UniswapApp;
