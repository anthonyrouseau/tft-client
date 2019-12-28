import React from 'react';
import './App.css';
import ProfileCard from './Components/ProfileCard';
import axios from 'axios';


function App() {
  const [profile, setProfile] = React.useState({});
  const [name, setName] = React.useState("Narfyy");
  React.useEffect( () => {
    async function fetchProfile() {
      try {
        var res = await axios.get(`/profile/${name}`);
        setProfile(res.data);
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
      <ProfileCard profile={profile}></ProfileCard>
    </div>
  );
}

export default App;
