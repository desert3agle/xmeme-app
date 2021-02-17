import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//components
import EditMeme from './components/EditMeme';
import CreateMeme from './components/CreateMeme';




function App() {
  return (
    <div>
      <Router>
        {/* page wrapper to wrap components as one*/}
        <PageWrapper>
          < Switch>

            {/* routes defined for diff components */}
            <Route
              exact={true}
              path="/"
              component={CreateMeme}
            />

            <Route
              path="/edit/:id"
              component={EditMeme}
            />

          </Switch>
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
