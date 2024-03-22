import { Link, useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {name, phone, id, username, website} = user;
    
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate(`/users/${id}`) 
    }

    return (
        <div className="border border-yellow-400 p-6 rounded-2xl">
            <h3>{name}</h3>
            <p>Phone:{phone}</p>
            <p>Website:{website}</p>
            <Link className="btn bg-green-500" to={`/users/${id}`}>Details</Link> <br />
            <button className="btn bg-pink-400" onClick={handleClick}>Click to see more details</button>
        </div>
    );
};

export default User;