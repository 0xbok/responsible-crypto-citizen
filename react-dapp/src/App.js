//import { ethers } from 'ethers'
// import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
import {
  useQuery,
  gql
} from "@apollo/client";


function App() {
  const allAaveProposalsQuery = gql`
query getAllAaveProposals {
  proposals(first: 5) {
    id
    state
    title
    shortDescription
  }
}
`;

function AaveProposals() {
  const { loading, error, data } = useQuery(allAaveProposalsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  console.log(window.$data = data);
  
  return <ul> {
    data.proposals.map(
      function(element, index){ 
        return <li key={index}> {element.id}, {element.state}, {element.title}, {element.shortDescription} </li>; 
      })} 
    </ul>;
}

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <AaveProposals />
    </div>
  );
}

export default App;