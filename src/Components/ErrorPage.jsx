import ErrorFace from "../assets/unhappy.png"

function ErrorPage({message}) {
    
    return(
    <>
        <h2>Page Not Found</h2>
            <img src={ErrorFace} />
            <h3>Please check your url path is correct</h3>
            <p>{message}</p>

        </>
    )
}

export default ErrorPage