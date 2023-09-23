import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
<div>
<nav className="flex items-center justify-between py-8 shadow-lg p-5">
    <Logo></Logo>

<ul className="flex gap-5">
    <li>
<NavLink
    to="/"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-green-600 underline p-1" : ""
    }
>
    Home
</NavLink>
</li>
<li>
<NavLink
    to="/favorites"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-green-600 underline p-1" : ""
    }
>
    Favorites
</NavLink>
</li>

<li>
<NavLink
    to="/login"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-green-600 underline p-1" : ""
    }
>
   Login
</NavLink>
</li>
</ul>
</nav>
</div>
);
};

export default Navbar;