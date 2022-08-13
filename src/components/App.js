// create your App component here
import React, { useEffect, useState } from "react";

 function App(){

    const [dog, setDog] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res, "Fetch Data")
                setDog(res)
                setIsLoaded(true)
            });

    }, []);

    if(!isLoaded) return <p>Loading...</p>;

    return (
        <div>
            <h1>{dog.message}</h1>

        </div>
    )
}

export default App;