import Widget from '../../components/Widget/Widget';
import samplerIcon from '../../images/sampler-icon.svg';
import bottleFilling from '../../images/bottle_filling_sprite.svg';
import arrowIcon from '../../images/arrow.svg';
import Method from '../../components/Method/Method';
import Image from '../../components/Image/Image';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Btn_big from '../../components/Btn_big/Btn_big';
import InfoBox from '../../components/InfoBox/InfoBox';
import Icon from '../../components/Icon/Icon';
import chart from '../../images/live-chart.png';
import legendIcon from '../../images/legend.png';
import settingsIcon from '../../images/xy-settings.png';
import balanceIcon from '../../images/ICON-BALANCE.png';
import { useState, useEffect } from 'react';
import {
  OPEN_CURRENT_METHOD_URL,
  OPEN_DEFAULT_METHOD_URL,
  OPEN_METHOD_URL,
  OPEN_SAVED_METHODS_URL,
  SAVE_METHOD,
} from '../../constants';
import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrentMethod,
  addTableStap,
  changeSelectedInput,
  changeRampInput,
  changeRateInput,
  changeValueInput,
  changeHoldTimeInput,
  changeRunTimeInput,
  setSaveMethods,
  setCurrentMethodName,
  toggleControlModeStatus,
  saveCurrentMethodName,
} from '../../store';

import styles from './MethodPage.module.css';
import SVG_bottle from '../../components/SVG_bottle/SVG_bottle';
import SVG_valve from '../../components/SVG_valve/SVG_valve';
import SVG_sampler from '../../components/SVG_sampler/SVG_sampler';

function MethodPage() {
  const reduxDispatch = useDispatch();
  const store = useSelector(store => store.AppStore);

  const [widgetIsOpen, setWidgetIsOpen] = useState(false);
  const [saveMethodsModalIsOpen, setSaveMethodsModalIsOpen] = useState(false);
  const [newMethodNameModalIsOpen, setNewMethodNameModalIsOpen] = useState(false);
  const [spinerIsActive, setSpinerIsActive] = useState(true);

  useEffect(() => {
    setSpinerIsActive(true);
    axios.get(OPEN_CURRENT_METHOD_URL)
      .then((resp) => {
        const currentMethod = resp.data;
        reduxDispatch(setCurrentMethod(currentMethod));
        setSpinerIsActive(false);
      }).catch((err) => {
        console.log(err);
        setSpinerIsActive(false);
      })
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

  async function openSaveMethodsModal() {
    setSpinerIsActive(true);
    await axios.get(OPEN_SAVED_METHODS_URL)
      .then(response => {
        reduxDispatch(setSaveMethods(response.data));
        setSpinerIsActive(false);
      }).catch((err) => {
        console.log(err);
        setSpinerIsActive(false);
      })
    setSaveMethodsModalIsOpen(true)
  }

  async function openMethod(index) {
    setSpinerIsActive(true);
    await axios.get(`${OPEN_METHOD_URL}${store.savedMethods[index]}`)
      .then((response) => {
        const currentMethod = response.data;
        reduxDispatch(setCurrentMethod(currentMethod));
        setSpinerIsActive(false);
      }).catch((err) => {
        console.log(err);
        setSpinerIsActive(false);
      })
    setSaveMethodsModalIsOpen(false);
  }

  async function setNewMethod() {
    setSpinerIsActive(true);
    await axios.get(OPEN_DEFAULT_METHOD_URL)
      .then((response) => {
        const currentMethod = response.data;
        reduxDispatch(setCurrentMethod(currentMethod));
        setSpinerIsActive(false);
      }).catch((err) => {
        console.log(err);
        setSpinerIsActive(false);
      })
  }

  async function saveMethod() {
    setNewMethodNameModalIsOpen(false);
    setSpinerIsActive(true);
    await axios.post(SAVE_METHOD,
      store.currentMethod, {
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      setSpinerIsActive(false);
    })
      .catch((err) => {
        console.log(err);
        setSpinerIsActive(false);
      })
  }

  function openNewMethodNameModal() {
    reduxDispatch(saveCurrentMethodName());
    setNewMethodNameModalIsOpen(true);
  }

  function closeNewMethodNameModal() {
    setNewMethodNameModalIsOpen(false);
    reduxDispatch(setCurrentMethodName(store.currentMethodName));
  }

  return (
    <div className={styles.methodPage}>

      <ModalWindow
        isOpen={saveMethodsModalIsOpen}
        closeFunc={() => setSaveMethodsModalIsOpen(false)}>
        <ul className={styles.saveMethodList}>
          {store.savedMethods.map((method, index) =>
            <li
              key={uuid()}
              className={styles.saveMethod}
              onClick={() => openMethod(index)}>
              {method}
            </li>
          )}
        </ul>
      </ModalWindow>

      <ModalWindow
        isOpen={newMethodNameModalIsOpen}
        closeFunc={closeNewMethodNameModal}>
        <div className={styles.newMethodNameModal}>
          <div className={styles.newMethodNameInputWrapper}>
            <label htmlFor="methodNameInput">Method name</label>
            <input
              name='methodNameInput'
              type="text"
              value={store.currentMethod.name || ''}
              onChange={(e) => reduxDispatch(setCurrentMethodName(e.target.value))} />
          </div>
          <Btn_big
            isFill={true}
            text={'Save'}
            handleClick={saveMethod} />
        </div>
      </ModalWindow>

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
              >
                <SVG_sampler />
              </Widget>
            </li>
            <li className={styles.widgetsListItem}>
              <Widget
                title={'Sampler'}
                widgetColor={'#4082a5'}
              >
                <SVG_bottle />
                <SVG_valve />
              </Widget>
            </li>
          </ul>
        </div>

        <div className={styles.pageBody}>
          <div className={styles.methodWrapper}>
            <Method
              isLoading={spinerIsActive}
              currentMethod={store.currentMethod}
              addTableRow={addStep}
              saveMethod={openNewMethodNameModal}
              changeSelectedInput={(index) => reduxDispatch(changeSelectedInput(index))}
              changeRampInput={(value, index) => reduxDispatch(changeRampInput({ index, value }))}
              changeRateInput={(value, index) => reduxDispatch(changeRateInput({ index, value }))}
              changeValueInput={(value, index) => reduxDispatch(changeValueInput({ index, value }))}
              changeHoldTimeInput={(value, index) => reduxDispatch(changeHoldTimeInput({ index, value }))}
              changeRunTimeInput={(value, index) => reduxDispatch(changeRunTimeInput({ index, value }))}
              setSaveMethodsModalIsOpen={openSaveMethodsModal}
              setNewMethod={setNewMethod}
              changeControlModeStatus={() => reduxDispatch(toggleControlModeStatus())}
            />
          </div>

          <div className={styles.infoBoxWrapper}>
            <InfoBox
              title={'live chart'}>
              <div className={styles.chartBox}>
                <div className={styles.chartWrapper}>
                  <ul className={styles.chartPlotList}>
                    <li className={styles.chartPlotListItem}>
                      <Icon
                        icon={'colorIcon'}
                        color={'#1ba39c'}
                        size={20} />
                      <span>
                        Plot
                      </span>
                    </li>
                    <li className={styles.chartPlotListItem}>
                      <Icon
                        icon={'colorIcon'}
                        color={'#913d88'}
                        size={20} />
                      <span>
                        Plot
                      </span>
                    </li>
                    <li className={styles.chartPlotListItem}>
                      <Icon
                        icon={'colorIcon'}
                        color={'#f5ad3c'}
                        size={20} />
                      <span>
                        Plot
                      </span>
                    </li>
                  </ul>
                  <div className={styles.chart}>
                    <Image
                      image={chart} />
                  </div>
                </div>
                <ul className={styles.chartViewBtnsList}>
                  <li className={styles.chartViewBtn}>
                    <Image
                      image={legendIcon} />
                  </li>
                  <li className={styles.chartViewBtn}>
                    <Image
                      image={settingsIcon} />
                  </li>
                  <li className={styles.chartViewBtn}>
                    <Image
                      image={balanceIcon} />
                  </li>
                </ul>
              </div>
            </InfoBox>
          </div>

        </div>
      </div>
    </div >
  );
}

export default MethodPage;
