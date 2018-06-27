const activeClassName='tabs__item-active'
const App = ()=>  (
    <Router>
        <div className="tabs">
            <nav className="tabs__items">
                <NavLink className="tabs__item" to="/" exact activeClassName={activeClassName}>Рефераты</NavLink>
                <NavLink className="tabs__item" to="/creator" activeClassName={activeClassName}>Криэйтор</NavLink>
                <NavLink className="tabs__item" to="/fortune" activeClassName={activeClassName}>Гадалка</NavLink>
            </nav>
            <div className="tabs__content">
                <Switch>
                    <Route path="/fortune" component={Fortune}/>
                    <Route path="/creator" component={Creator}/>
                    <Route path="/" component={Essay}/>
                </Switch>
            </div>
        </div>
    </Router>
)
