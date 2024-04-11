import * as React from 'react';
import * as formattingUtils from '../utils/formatting';
import { InfoIcon } from './UI/InfoIcon/InfoIcon';
import { CartContext } from '../store/CartContext';
import classes from './MealItem.module.css';
// Components & types
import { TMeal } from '../types/types';
import { Button } from './UI/Button/Button';

export function MealItem(props: { meal: TMeal }) {
  const { meal } = props;
  const { id, name, image, price, description } = meal;
  const { currencyFormatter } = formattingUtils;
  const formattedPrice = currencyFormatter.format(parseFloat(price));
  const { addToCart } = React.useContext(CartContext);

  const [showDescription, setShowDescription] = React.useState(false);
  const showMealDescription = React.useCallback(() => {
    setShowDescription((prev) => !prev);
  }, []);

  return (
    <li className={classes['meal-item']}>
      <article>
        {/* Toggleable Description Pop-up */}
        <div className={classes['description-container']}>
          <Button isTextOnly onClick={showMealDescription}>
            <InfoIcon />
          </Button>
          {showDescription && (
            <p className={classes.description}>{description}</p>
          )}
        </div>

        <img src={`http://localhost:3001/${image}`} alt={name} />
        <div>
          <h3>{name} </h3>
          <p className={classes['meal-item-price']}>{formattedPrice}</p>
        </div>

        <p className={classes['meal-item-actions']}>
          <Button
            isTextOnly={false}
            onClick={() => addToCart({ id, name, price: parseFloat(price) })}
          >
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
}
