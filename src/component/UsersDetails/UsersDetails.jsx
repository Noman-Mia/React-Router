import { useLoaderData } from "react-router-dom";

const UsersDetails = () => {

   const user = useLoaderData();

    return (
        <div>
            <h2 className="text-4xl font-bold">User Name: {user?.name}</h2>
        </div>
    );
};

export default UsersDetails;