import React from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  


function AaveApp() {
  const allProposalsQuery = gql`
    query getAllProposals {
      proposals(first: 5) {
        id
        state
        title
        shortDescription
      }
    }`;
  
  const getProposalQuery = gql`
    query getProposal($proposalId: ID!) {
      proposal(where: {id: $proposalId}) {
        id
        state
        title
        shortDescription
      }
    }`;

  function Proposals() {
    const { loading, error, data } = useQuery(allProposalsQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return <Router>
      <ul> {
      data.proposals.map(
        function(element, index){ 
          return <li key={element.id}> <Link to={'/aave/'+element.id}> {element.id}, {element.state}, {element.title}, {element.shortDescription} </Link> </li>; 
        })} 
      </ul>
      
        <Route path="/aave/:id" component={AaveProposal} />
      </Router>;
  }
  

  /*function getProposal(id) {
    const { loading, error, data } = useQuery(getProposalQuery, { variables: {id}});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return <Router>
      <ul> {
      data.proposals.map(
        function(element, index){ 
          return <li key={element.id}> <Link to={'/aave/'+element.id}> {element.id}, {element.state}, {element.title}, {element.shortDescription} </Link> </li>; 
        })} 
      </ul>
      
        <Route path="/aave/:id" component={AaveProposal} />
      </Router>;
  }*/

  class AaveProposal extends React.Component {
    render() {
      return (
        <div>
          {this.props.match.params.id}
        </div>
      );
    }
  }


  return (
    <div>
      <h2>Aave Governance Proposals</h2>
      <Proposals />
    </div>
  );
}

export default AaveApp;