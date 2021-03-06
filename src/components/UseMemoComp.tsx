// Dùng để tránh thực hiện lại logic không cần thiết

import { useMemo, useRef, useState } from 'react';

export function UseMemoComp() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState<Array<any>>([]);

  const nameRef = useRef<any>();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName('');
    setPrice('');
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    console.log('Tính toán lại...')

    return products.reduce((result, prod) => result + prod.price, 0);
  }, [products]);

  return (
    <div className="p-3">
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total:
      {' '}
      {total}
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            {product.name}
            {' '}
            -
            {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
