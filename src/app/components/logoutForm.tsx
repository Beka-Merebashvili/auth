import { logout } from "../actions";

const LogiutForm = () => {
    return ( 
        <form action={logout}>
            <button>logout</button>
        </form>
     );
}
 
export default LogiutForm;