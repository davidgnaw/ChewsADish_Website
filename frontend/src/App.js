import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Popular from './components/pages/Popular'
import Gallary from './components/pages/Gallary'
import UserPage from './components/pages/UserPage'
import UserProfile from './components/pages/UserProfile'
import CreateYourOwnRecipe from './components/pages/CreateYourOwnRecipe';
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login';
import Recipes from './components/pages/Recipes';
import RecipeDetail from './components/pages/RecipeDetail';
import Search from './components/pages/Search';
import IngredientWalmart from './components/pages/IngredientWalmart';

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='content'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Popular' exact component={Popular} />
            <Route path='/Gallary' exact component={Gallary} />
            <Route path='/UserPage' exact component={UserPage} />
            <Route path='/UserProfile' exact component={UserProfile} />
            <Route path='/CreateYourOwnRecipe' exact component={CreateYourOwnRecipe}/>
            <Route path='/SignUp' exact component={SignUp} />
            <Route path='/Login' exact component={Login} />
            <Route path='/Recipes' exact component={Recipes} />
            <Route path='/Recipe/:id' exact component={RecipeDetail}/>
            <Route path='/Search' exact component={Search}/>
            <Route path='/Ingredient' exact component={IngredientWalmart}/>
          </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;