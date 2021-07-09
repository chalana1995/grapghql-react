import React, { Component, Fragment } from 'react';
import {
    useQuery,
    gql
} from "@apollo/client";
import LaunchItem from './LaunchItem';


const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
      launches {
          flight_number,
          mission_name,
          launch_date_local,
          launch_success
      }
  }
  `

function LaunchQuery() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    return (
        <Fragment>
            {data.launches.map((launch) => (
                <LaunchItem key={launch.flight_number} launch={launch} />
            ))}
        </Fragment>
    )
}

export class Launches extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="dispaly-4 my-3">Launches</h1>
                <LaunchQuery />
            </Fragment>
        )
    }
}

export default Launches
