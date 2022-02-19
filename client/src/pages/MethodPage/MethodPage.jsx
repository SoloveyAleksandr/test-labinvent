import Icon from '../../components/Icon/Icon';
import Widget from '../../components/Widget/Widget';
import samplerIcon from '../../images/sampler-icon.svg';
import bottleFilling from '../../images/bottle_filling_sprite.svg';
import arrowIcon from '../../images/arrow.svg';
import Method from '../../components/Method/Method';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  OPEN_CURRENT_METHOD_URL,
  OPEN_SAVED_METHODS_URL,
  SAVE_METHOD,
} from '../../constants';
import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrentMethod,
  addTableStap,
  changeTableInputValue,
  changeTableInputRadio,
} from '../../store';

import styles from './MethodPage.module.css';
import Image from '../../components/Image/Image';

function MethodPage() {
  const reduxDispatch = useDispatch();
  const store = useSelector(store => store.AppStore);

  const [widgetIsOpen, setWidgetIsOpen] = useState(false);

  useEffect(() => {
    axios.get(OPEN_CURRENT_METHOD_URL).then((resp) => {
      const currentMethod = resp.data;
      reduxDispatch(setCurrentMethod(currentMethod));
    });
  }, [])



  function addStep() {
    reduxDispatch(addTableStap({
      "selected": false,
      "ramp": '',
      "rate": '',
      "value": '',
      "holdTime": '',
      "runTime": '',
    }))
  }

  function changeTableInput(e, index, name) {
    reduxDispatch(changeTableInputValue({
      index: index,
      value: e.target.value,
      name: name,
    }))
  }

  function changeTableRadio(index) {
    reduxDispatch(changeTableInputRadio(index))
  }

  async function saveMethod() {
    // await axios.post(SAVE_METHOD,
    //   store.currentMethod, {
    //   headers: { 'Content-Type': 'application/json' },
    // }).then((response) => {
    //   console.log(response);
    // }).catch((err) => {
    //   console.log(err)
    // })
    console.log('save');
  }

  async function checkSaved() {
    await axios.get(OPEN_SAVED_METHODS_URL)
      .then(response => {
        console.log(response.data)
      })
  }

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
            <Image image={arrowIcon} />
          </div>
          <ul className={styles.widgetsList}>
            <li className={styles.widgetsListItem}>
              <Widget
                title={'Sampler'}
                widgetColor={'#1a9022'}
                image={
                  <Image image={samplerIcon} />
                } />
            </li>
            <li className={styles.widgetsListItem}>
              <Widget
                title={'Sampler'}
                widgetColor={'#4082a5'}
                image={
                  <Image image={bottleFilling} />
                } />
            </li>
          </ul>
        </div>

        <div className={widgetIsOpen ?
          `${styles.pageBody} ${styles.isOpen}` :
          styles.pageBody}>
          <Method
            currentMethod={store.currentMethod}
            addTableRow={addStep}
            changeInputText={(e, index, name) => changeTableInput(e, index, name)}
            changeRadioState={(index) => changeTableRadio(index)}
            saveMethod={saveMethod}
            checkSaved={checkSaved}
          />
        </div>
      </div>
    </div >
  );
}

export default MethodPage;
