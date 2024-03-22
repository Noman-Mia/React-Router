import { useLoaderData, useNavigate } from "react-router-dom";

const UsersDetails = () => {

   const user = useLoaderData();
    
   const navigate = useNavigate();
   const handleGoBack = () =>{
    navigate(-1)
   }
    return (
        <div className="text-center">
            <h4>Id:{user.id}</h4>
            <h2 className="text-4xl font-bold">User Name: {user?.name}</h2>
            <button onClick={handleGoBack} className="btn bg-purple-400">Go Back</button>
        </div>
    );
};

export default UsersDetails;