import { useState } from 'react';
import styles from './products.module.scss';
import BtnDefault from '../../BtnDefault/BtnDefault';

interface ProductProps {
  rating?: number;
  imgPath?: string;
  title?: string;
  description?: string;
  price?: number;
}

const Product: React.FC<ProductProps> = ({ imgPath, title, description, price, rating }) => {
  const [descrVisible, setDescrVisible] = useState<boolean>(false);

  const toggleDescr = () => {
    setDescrVisible(!descrVisible);
  };

  return (
    <li className={`${styles['products__item']}`}>
      <span className={`${styles['products__rating']}`}>{rating}</span>
      <img className={`${styles['products__img']}`} src={imgPath} alt={'img'} />
      <h2 className={`${styles['products__title']} title-reset`}>{title}</h2>
      <span className={`${styles['products__price']}`}>{price}</span>

      <BtnDefault onClick={toggleDescr}>
        {descrVisible ? 'Показать описание товара' : 'Скрыть описание товара'}
      </BtnDefault>

      {descrVisible && <p className={`${styles['products__descr']} descr-reset`}>{description}</p>}
    </li>
  );
};

export default Product;
