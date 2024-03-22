import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Opps!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status===404 &&  <div>
                    <h3>page not found</h3>
                    <h2>go back where you from</h2>
                    <Link to="/"><button className="btn to-blue-400">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;