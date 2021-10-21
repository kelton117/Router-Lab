import { useState, useEffect } from "react";

const Stock = (props) => {
    const apiKey = "74d23e69dade4babd2f9bd28b4197f08";
    const symbol = props.match.params.symbol;
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`

    const [stock, setStock] = useState(null);

    const getStock = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setStock(data);
    };

    useEffect(() => {
        getStock();
    }, []);

    const loaded = () => {
        return (
          <div>
            <h1>
              {stock[0].companyName}
            </h1>
            <h2>{stock[0].price}</h2>
          </div>
        );
      };
    
      // Function for when data doesn't exist
      const loading = () => {
        return <h1>Loading...</h1>;
      };

    return stock ? loaded() : loading();
};

export default Stock;