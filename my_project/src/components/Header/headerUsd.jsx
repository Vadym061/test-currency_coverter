import React from "react";
const grn = ['UAH'];

export const Usd = ({ value }) =>(
    <div className="header__block">
        <p className="header__currency"> 1 USD {value}  {grn}</p>
    </div>
)