import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './components/Main';
import LocalPosts from './components/LocalPost';
import ExternalPost from './components/ExternalPost';


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Main>
                        <Route component={({ match }) =>
                            <div>
                                <Route path='/' exact component={LocalPosts} />
                                <Route path='/externalPost' exact component={ExternalPost} />
                            </div>
                        } />
                    </Main>
                </Switch>
            </BrowserRouter>
        );
    }

}
export default Router;
