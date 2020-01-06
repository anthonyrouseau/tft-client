import React from 'react';
import './App.css';
import ProfileCard from './Components/ProfileCard';
import MatchCard from './Components/MatchCard';
import axios from 'axios';
import SummonerSearch from './Components/SummonerSearch';
import DataVis from './Components/DataVis';


function App() {
  const [profile, setProfile] = React.useState({});
  const [name, setName] = React.useState("Narfyy");
  const [matches, setMatches] = React.useState([]);
  React.useEffect( () => {
    async function fetchProfile() {
      try {
        var res = await axios.get(`/profile/${name}`);
        var puuid = res.data.puuid;
        setProfile(res.data);
        try {
          res = await axios.get(`/matches/${puuid}`);
          setMatches(res.data);
        }catch(err){
          console.log(err)
        }
      } catch(err) {
        console.log(err);
      }
    }
    if(name !== ""){
      fetchProfile();
    }
  }, [name])
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <DataVis matches={matches}/>
      <SummonerSearch setName={setName}/>
      <ProfileCard profile={profile}></ProfileCard>
      {matches.map( match => <MatchCard key={match.id} match={match}></MatchCard>)}
    </div>
  );
}

export default App;
