import React from 'react';
import {Block} from './components/Block/Block';
import './index.scss';
function App() {
  const [fromCurrency, setFromCurrency] = React.useState('UAH');
  const [toCurrency, setToCurrency] = React.useState('USD');
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(1);
  const reateRef = React.useRef({});

  React.useEffect(()=>{
    fetch(`https://api.exchangerate.host/latest?base=${1}`)
    .then((res)=> res.json())
    .then((date)=> {
      // setRates(date.rates);
      reateRef.current = date.rates;
      onChangeToPrice(1)
    })
    .catch((err)=>{
      console.warn(err);
      alert('Не удалось получить информацию');
    });
  }, []);

  const onChangeFromPrice = (value) => {
    const price = value / reateRef.current[fromCurrency];
    const result = price * reateRef.current[toCurrency];
    setToPrice(result.toFixed(2))
    setFromPrice(value)
  }
  const onChangeToPrice = (value) => {
    const result = (reateRef.current[fromCurrency] / reateRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(2))
    setToPrice(value)
  }

  React.useEffect(()=>{
    onChangeFromPrice(fromPrice)
  }, [fromCurrency]);
  React.useEffect(()=>{
    onChangeToPrice(toPrice)
  }, [toCurrency]);

  return (
    <div className='App'>
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice} />
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}/>
    </div>
  );
}
export default App;
