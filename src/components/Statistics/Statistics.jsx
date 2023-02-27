import PropTypes from 'prop-types'; // ES6
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(6, 0)}`;
  }
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(el => {
          return (
            <li
              className={css.item}
              key={el.id}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <span className={css.label}>{el.label}</span>
              <span className={css.percentage}>{el.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};