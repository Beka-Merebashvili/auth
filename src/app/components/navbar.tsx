import Link from "next/link";
import LogiutForm from "./logoutForm";
import { getSession } from "@/app/actions";
 


const Navbar = async () => {
    const session = await getSession()
    
    
    return ( 
        <nav>
            <Link href="/">Homepage</Link>
            <Link href="/premium">Premium</Link>
            <Link href="/profile">Profile</Link>
            
            {!session.isLoggedIn && <Link href="/login">Login</Link>}
            {session.isLoggedIn && <LogiutForm />}
        </nav>
     );
}
 
export default Navbar;