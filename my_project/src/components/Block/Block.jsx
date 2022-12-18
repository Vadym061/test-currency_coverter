import React from "react";
import './block.scss';
import {FiChevronDown} from "react-icons/fi";
const defaultCurrencies = ['UAH', 'USD', 'EUR', 'PLN'];

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
    <div className="block">
      <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? 'active' : ''}
            key={cur}>
            {cur}
          </li>
        ))}
        <select name="" id="" className="select">
        {defaultCurrencies.map((cur) => (
            <option onClick={() => onChangeCurrency(cur)} className='option'  value="" key={cur}>{cur}</option>
          ))
        }
      </select>
      </ul>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        placeholder={0}
      />
    </div>
  );