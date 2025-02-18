import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();  
    
    console.error(error);

  return (
    <div>
        <h1>Ops... Temos um problema!</h1>
        <p>{error.statusText}</p>
        <p>{error.error.message}</p>
    </div>
  )
}

export default ErrorPage