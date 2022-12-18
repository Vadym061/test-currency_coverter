import React from "react";
import { Usd } from "./headerUsd";
import {HiCurrencyDollar} from 'react-icons/hi';
import "./header.scss"
import { Eur } from "./headerEur";




function Header() {
    const [uahCurrency, setUahCurrency] = React.useState('UAH');
    const [usdCurrency, setUsdCurrency] = React.useState('USD');
    const [goodPrice, setGoodPrice] = React.useState(1);
    const [isPrice, setIsPrice] = React.useState(1);

    const [eurCurrency, setEurCurrency] = React.useState('EUR');
    const [goodEurPrice, setGoodEurPrice] = React.useState(1);
    const [eurPrice, setEurPrice] = React.useState(1);
    
    const ratesRef = React.useRef({});

 React.useEffect(()=>{
  fetch('https://api.exchangerate.host/latest')
  .then((res)=> res.json())
  .then((json)=> {
    ratesRef.current = json.rates;
    console.log(json.rates)
    onChangeToPrice(1)
    onChangeGoPrice(1)
  })
  .catch((err)=>{
    console.warn(err);
    alert('Не удалось получить информацию');
  })
 }, []);


 const onChangeFromPrice = (value) => {
    const price = value / ratesRef.current[uahCurrency];
    const result = price * ratesRef.current[usdCurrency];
  
    setIsPrice(result.toFixed(2))
    setGoodPrice(value)
   }
   const onChangeToPrice = (value) => {
    const result = (ratesRef.current[uahCurrency] / ratesRef.current[usdCurrency]) * value;
  
    setGoodPrice(result.toFixed(2))
    setIsPrice(value)
   }

   const onChangeEurPrice = (value) => {
    const price = value / ratesRef.current[uahCurrency];
    const result = price * ratesRef.current[eurCurrency];
  
    setEurPrice(result.toFixed(2))
    setGoodEurPrice(value)
   }
   const onChangeGoPrice = (value) => {
    const result = (ratesRef.current[uahCurrency] / ratesRef.current[eurCurrency]) * value;
  
    setGoodEurPrice(result.toFixed(2))
    setEurPrice(value)
   }
   return(
    <header className="header">
    <div className="header__wrapper">
    <a href="/" style={{textDecoration: "none", color: "black" }}> <h1 className="header__logo"><HiCurrencyDollar style={{fontSize: 40}}/> Currency converter</h1></a>
     <Usd value={goodPrice} currency={uahCurrency} onChangeCurrency={setUahCurrency} onChangeValue={onChangeFromPrice}/>
     <Eur value={goodEurPrice} currency={uahCurrency} onChangeCurrency={setEurCurrency} onChangeValue={onChangeEurPrice}/>
    </div>
 </header>
   )
}
export default Header;