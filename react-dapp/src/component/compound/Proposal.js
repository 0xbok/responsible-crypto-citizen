import React from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";

function Proposal(nest) {
    var id = nest.match.params.id;
  const getProposalQuery = gql`
    query getProposal($id: ID) {
      proposal(id: $id) {
        id
        status
        description
      }
    }`;

  

  function GetProposal() {
    console.log(nest);
    
    console.log(id);
    const { loading, error, data } = useQuery(getProposalQuery, { variables: {id}} );
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <p>Error :(</p>;
    }

    console.log(data);
    
    return <div>
    <b>ID: {data.proposal.id}, State: {data.proposal.status}</b><br/>
    {data.proposal.description}
    </div>
  }


  return (
    <div>
      <h2>Compound Governance Proposal {id} </h2>
      <GetProposal />
    </div>
  );
}

export default Proposal;