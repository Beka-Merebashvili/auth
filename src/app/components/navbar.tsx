import Link from "next/link";
import LogiutForm from "./logoutform";

const Navbar = () => {
    return ( 
        <nav>
            <Link href="/">Homepage</Link>
            <Link href="/premium">Premium</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/login">Login</Link>
            <LogiutForm />
        </nav>
     );
}
 
export default Navbar;