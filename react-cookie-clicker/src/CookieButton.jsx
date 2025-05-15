import React, {useState} from "react";
function CookieButton(){
    let [cookies, setCookies] = useState(0);
    const [cash, setCash] = useState(0);

    function handleCookieClick(){
        setCookies(cookies + 1)
    }

    function handleSellCookies(){
        setCash(cash + cookies);
        setCookies (0);
    }
    
    return(
        <div className="cookie">
            <h1>Cookies collected: {cookies}</h1>
            <button onClick={handleCookieClick} className="cookie-button"><img src="./cookie.png" alt="cookie button" className="cookie-image"/></button>
            <button className="sell-button" onClick={handleSellCookies}>sell</button>   
            <p className="cash-text">Cash: {cash}€</p>
        </div>
    )
}

export default CookieButton;