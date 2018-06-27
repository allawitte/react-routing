function Menu() {
    const onLinkClick = (e)=>{
        const path = e.target/path + e.target.serach || '';
        e.preventDefault();
        history.push(path);
    };
    const activeClassName = 'menu__item-active';
    return ( <nav className = "menu">
        <NavLink  className="menu__item" exact to = "/" activeClassName={activeClassName}> Главная </NavLink>
        <NavLink  className="menu__item"  to = "/drift" activeClassName={activeClassName}> Дрифт - такси </NavLink>
        <NavLink  className="menu__item"  to = "/timeattack" activeClassName={activeClassName}> Time Attack </NavLink>
        <NavLink  className="menu__item"  to = "/forza" activeClassName={activeClassName} > Forza Karting </NavLink>
        </nav> )
    }