import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [state, setState] = useState();

    useEffect(() => {
        axios.get("url").then((response) => setState(response.data.title))
    }, []);

  return (
      <h1>{state}</h1>
  )
}

export default App
