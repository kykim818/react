// import Lecture1 from "./StyledComponents/lecture1";
// import Lecture2 from "./StyledComponents/lecture2";
// import Lecture3 from "./StyledComponents/lecture3";
// import Lecture4 from "./StyledComponents/lecture4";
// import Lecture5 from "./StyledComponents/lecture5";
// import Lecture6 from "./StyledComponents/lecture6";
// import Lecture7 from "./StyledComponents/lecture7";

import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    // <div className="App">
    //   {/* <Lecture1 /> */}
    //   {/* <Lecture2 /> */}
    //   {/* <Lecture3 /> */}
    //   {/* <Lecture4 /> */}
    //   {/* <Lecture5 /> */}
    //   {/* <Lecture6 /> */}
    //   {/* <Lecture7 /> */}
    // </div>
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Router>
  );
}

export default App;
