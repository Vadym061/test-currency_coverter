import React from "react";
const grn = ['UAH'];
export const Eur = ({ value }) =>(
    <div className="header__block">
        <p className="header__currency"> 1 EUR {value}  {grn}</p>
    </div>
)