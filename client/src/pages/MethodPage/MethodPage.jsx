import { useState } from 'react';
import Icon from '../../components/Icon/Icon';
import Widget from '../../components/Widget/Widget';
import samplerIcon from '../../images/sampler-icon.svg';
import bottleFilling from '../../images/bottle_filling_sprite.svg';
import arrowIcon from '../../images/arrow.svg';
import Method from '../../components/Method/Method';

import styles from './MethodPage.module.css';

function MethodPage() {
  const [widgetIsOpen, setWidgetIsOpen] = useState(false);

  return (
    <div className={styles.methodPage}>
      <div
        className={widgetIsOpen ?
          `${styles.innerWrapper} ${styles.isOpen}` :
          styles.innerWrapper}>

        <div className={widgetIsOpen ?
          `${styles.widgets} ${styles.isOpen}` :
          styles.widgets}>
          <div
            className={widgetIsOpen ?
              `${styles.widgetsBtn} ${styles.isOpen}` :
              styles.widgetsBtn}
            onClick={() => setWidgetIsOpen(!widgetIsOpen)}>
            <Icon image={arrowIcon} />
          </div>
          <ul className={styles.widgetsList}>
            <li className={styles.widgetsListItem}>
              <Widget
                title={'Sampler'}
                widgetColor={'#1a9022'}
                image={
                  <Icon image={samplerIcon} />
                } />
            </li>
            <li className={styles.widgetsListItem}>
              <Widget
                title={'Sampler'}
                widgetColor={'#1a9022'}
                image={
                  <Icon image={bottleFilling} />
                } />
            </li>
          </ul>
        </div>

        <div className={widgetIsOpen ?
          `${styles.pageBody} ${styles.isOpen}` :
          styles.pageBody}>
          <Method />
        </div>
      </div>
    </div >
  );
}

export default MethodPage;
