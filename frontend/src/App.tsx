import { useState } from 'react';
import './App.css';
import { SampleProducts } from './data';

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0);

  return (
    <div>
      <header>
        Ts mirona
      </header>
      <main>
        <ul>
          {SampleProducts.map((product) => (
            <li key={product.slug}>
              
              <img src={product.image} alt={product.name} className='product-image'/>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              
            </li>
          ))}
        </ul>
      </main>
      <footer>
        All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
