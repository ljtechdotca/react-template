import { createRoot } from "react-dom/client";
import App from "./pages/App.jsx";
import "./styles/globals.scss";

// const appRouting = (
//   <Router>
//     <Switch>
//       <Route exact path="/" component={App} />
//     </Switch>
//   </Router>
// );

// ReactDOM.render(appRouting, document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
