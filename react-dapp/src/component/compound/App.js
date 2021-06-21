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
        return <li key={element.id}> <Link to={'/compound/'+element.id} target="_blank"> {element.id}, {element.status}, {element.description.substring(1,20)}... </Link> </li>;
      })}
    </ul>;
}

return (
  <Router>
  <Switch>
    <Route exact path="/">
  <div>
    <h2>Compound Governance Proposals</h2>
    <Proposals />
  </div>
  </Route>
      <Route path="/compound/:id" component={Proposal} />
    </Switch>
    </Router>
);
}

export default CompoundApp;
