import { useEffect, useState } from 'react';
import Product from './Product';
import styles from './products.module.scss';
import useNowDate from '../../hooks/useNowDate';

interface ProductListProps {
  title: string;
}

const ProductList: React.FC<ProductListProps> = ({ title }) => {
  const now = useNowDate();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const responce = await fetch('https://dummyjson.com/products');
      if (!responce.ok) {
        throw new Error('settings error');
      }
      const data = await responce.json();
      setProducts(data.products);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('unknown error');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error: {error}</div>;
  }

  return (
    <div className={`${styles['products']}`}>
      <div className={'container'}>
        <h1 className={`${styles['products__header']} title-reset`}>
          {title} <span>{now.toLocaleTimeString()}</span>
        </h1>

        <ul className={`${styles['products__list']} list-reset`}>
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                imgPath={product.thumbnail}
                title={product.title}
                description={product.description}
                rating={product.rating}
                price={product.price}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
