import React, {useState} from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";
import ReactMarkdown from "react-markdown";


function Proposal(nest) {
  var id = nest.match.params.id;
  const getProposalQuery = gql`
    query getProposal($id: ID) {
      proposal(id: $id) {
        id
        status
        endBlock
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
    
    // let isVotingAllowed;
    // if(curBlockNumber > data.proposal.endBlock) {
    //   isVotingAllowed = <div> Voting deadline passed. </div>
    // } else {
    //   isVotingAllowed = <div> Vote </div>
    // }
    return <div>
        <b>ID: {data.proposal.id}, State: {data.proposal.status}</b><br/>
        Voting ends on block: {data.proposal.endBlock}. 
        {/* {isVotingAllowed} */}
        <ReactMarkdown children={data.proposal.description} /><br/>
      </div>
  }


  return (
    <div>
      <h2>Uniswap Governance Proposal {id} </h2>
      <GetProposal />
    </div>
  );
}

export default Proposal;