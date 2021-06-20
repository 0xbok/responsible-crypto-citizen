import {
  useQuery,
  gql
} from "@apollo/client";


function CompoundApp() {
  const allProposalsQuery = gql`
    query getAllProposals {
      proposals(where: {status: ACTIVE}) {
        id
        status
        description 
      }   
    }`;

function Proposals() {
  const { loading, error, data } = useQuery(allProposalsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return <ul> {
    data.proposals.map(
      function(element, index){ 
        return <li key={element.id}> {element.id}, {element.status}, {element.description.substring(1,20)}... </li>; 
      })} 
    </ul>;
}

  return (
    <div>
      <h2>Compound Governance Proposals</h2>
      <Proposals />
    </div>
  );
}

export default CompoundApp;