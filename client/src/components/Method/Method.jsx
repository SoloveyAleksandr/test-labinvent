import Image from '../Image/Image';
import runIcon from '../../images/runIcon.png';
import stoppedIcon from '../../images/stoppedIcon.png';
import inletsImg from '../../images/inlets.png';
import columnImg from '../../images/column.png';
import detectorImg from '../../images/detector.png';
import sequenceArrow from '../../images/bigArrow.png';
import TitleWhithLine from '../TitleWhithLine/TitleWhithLine';
import { v4 as uuid } from 'uuid';
import Btn_big from '../Btn_big/Btn_big';
import Btn_small from '../Btn_small/Btn_small';
import TableRow from '../TableRow/TableRow';
import RunStateBtn from '../RunStateBtn/RunStateBtn';
import ControlInfo from '../ControlInfo/ControlInfo';
import { useState } from 'react';

import styles from './Method.module.css';

function Method({
  currentMethod,
  addTableRow,
  changeInputText,
  changeRadioState,
  saveMethod,
  checkSaved,
}) {

  const [openMethodTab, setOpenMethodTab] = useState(3);

  function getTime(value) {
    const time = Math.floor(+value / 60 / 60) > 10 ? Math.floor(+value / 60 / 60) : `0${Math.floor(+value / 60 / 60)}`;
    const minutes = Math.floor(+value / 60 % 60) > 10 ? Math.floor(+value / 60 % 60) : `0${Math.floor(+value / 60 % 60)}`;
    const seconds = +value % 60 > 10 ? +value % 60 : `0${+value % 60}`;
    if (+time > 0) {
      return `${time}:${minutes}:${seconds}`;
    } else return `${minutes}:${seconds}`
  }

  return (
    <div className={styles.method}>
      <div className={styles.header}>
        {currentMethod.name ?
          <ul className={styles.headerInfoList}>
            <li className={styles.headerInfoListItem}>
              <h2 className={styles.headerInfoListTitle}>worklist</h2>
            </li>
            <li className={styles.headerInfoListItem}>
              {
                currentMethod.status === 'RUN' ?
                  <RunStateBtn isRun={true} />
                  :
                  <RunStateBtn isRun={false} />
              }
            </li>
            <li className={styles.headerInfoListItem}>
              <div className={styles.headerTodoInfo}>
                <span className={styles.headerTodoInfoTitle}>TO DO:</span>
                <span className={styles.headerTodoInfoName}>
                  {`${currentMethod.countInjections} injections`}
                </span>
              </div>
            </li>
            <li className={styles.headerInfoListItem}>
              <span className={styles.headerInfoListTimer}>
                {getTime(currentMethod.currentTime)}
              </span>
            </li>
          </ul>
          : 'Loading...'}

        <ul className={styles.headerTabsBtnsList}>
          <li className={`${styles.headerTabBtn} ${styles.activeHeaderTab}`}>
            <span className={styles.headerTabBtnTitle}>method:</span>
            <span className={styles.headerTabBtnName}>
              {
                currentMethod.name ?
                  `${currentMethod.name} (${getTime(currentMethod.currentTime)}/${getTime(currentMethod.totalTime)})` :
                  'Loading...'
              }
            </span>
          </li>
          <li className={styles.headerTabBtn}>
            <span className={styles.headerTabBtnName}>SINGLE RUN</span>
          </li>
        </ul>
      </div>

      <div className={styles.methodTab}>

        <div className={styles.methodTabContainer}>
          <ul className={styles.methodTabBtnsList}>
            <li
              className={openMethodTab === 1 ?
                `${styles.methodTabBtn} ${styles.active}` :
                styles.methodTabBtn}
              onClick={() => setOpenMethodTab(1)}>ALS</li>
            <li
              className={openMethodTab === 2 ?
                `${styles.methodTabBtn} ${styles.active}` :
                styles.methodTabBtn}
              onClick={() => setOpenMethodTab(2)}>Inlets</li>
            <li
              className={openMethodTab === 3 ?
                `${styles.methodTabBtn} ${styles.active}` :
                styles.methodTabBtn}
              onClick={() => setOpenMethodTab(3)}>Columns</li>
          </ul>

          <ul className={styles.tabContentList}>
            <li className={openMethodTab === 1 ?
              `${styles.tabContentListItem} ${styles.active}` :
              styles.tabContentListItem}>
              <h1>ALS</h1>
            </li>
            <li className={openMethodTab === 2 ?
              `${styles.tabContentListItem} ${styles.active}` :
              styles.tabContentListItem}>
              <h1>Inlats</h1>
            </li>
            <li className={openMethodTab === 3 ?
              `${styles.tabContentListItem} ${styles.active}` :
              styles.tabContentListItem}>
              <div className={styles.columnsTab}>
                <div className={styles.columnsGeneralInfo}>
                  <ul className={styles.workSequenceList}>
                    <li className={styles.workSequenceItem}>
                      <span className={styles.workSequenceItemTitle}>
                        Front Inlet
                      </span>
                      <div className={styles.workSequenceItemImg}>
                        <img src={inletsImg} alt="img" />
                      </div>
                      <span className={`${styles.workSequenceDescription} ${styles.bold}`}>
                        SS (H<sub>2</sub>)
                      </span>
                    </li>

                    <li className={styles.workSequenceItem}>
                      <div className={styles.workSequenceArrow}>
                        <img src={sequenceArrow} alt="arrow" />
                      </div>
                      <span className={styles.workSequenceItemTitle}>
                        Agilent 19091Q-002
                      </span>
                      <div className={styles.workSequenceItemImg}>
                        <div className={styles.workSequenceArrow}>
                          <img src={sequenceArrow} alt="arrow" />
                        </div>
                        <img src={columnImg} alt="img" />
                      </div>
                      <span className={styles.workSequenceDescription}>
                        60 Oc - 450 Oc (450 Oc) 25 m * 320 μm * 1μm
                      </span>
                    </li>

                    <li className={styles.workSequenceItem}>
                      <span className={styles.workSequenceItemTitle}>
                        Back Detector
                      </span>
                      <div className={styles.workSequenceItemImg}>
                        <div className={styles.workSequenceArrow}>
                          <img src={sequenceArrow} alt="arrow" />
                        </div>
                        <img src={detectorImg} alt="img" />
                      </div>
                      <span className={`${styles.workSequenceDescription} ${styles.bold}`}>
                        NPD
                      </span>
                    </li>
                  </ul>

                  <ul className={styles.columnsTableInfoList}>
                    <li className={styles.columnsTableInfoListItem}>
                      (Initial): 0 min
                    </li>
                    <li className={styles.columnsTableInfoListItem}>
                      ArMe @ 35 <sup>o</sup>С Oven
                    </li>
                    <li className={styles.columnsTableInfoListItem}>
                      Out: Ambient Pressure
                    </li>
                    <li className={styles.columnsTableInfoListItem}>
                      25m * 320pm  * 1pm
                    </li>
                  </ul>
                </div>
                {currentMethod.name ?
                  <div>
                    <div className={styles.columnsControlMode}>
                      <div className={styles.controlMode}>
                        <TitleWhithLine title={'Control Mode'} />

                        <div className={styles.controlModeInnerWrapper}>
                          <div className={styles.controlModeCheckBoxWrapper}>
                            <input readOnly checked={currentMethod.column.controlOn} type="checkbox" name="isOnCheck" id="isOnCheck" />
                            <label htmlFor="isOnCheck">On</label>
                          </div>
                          <ul className={styles.controlModeInfoList}>
                            <li className={styles.controlModeInfoListItem}>
                              <ControlInfo
                                title={'Flow'}
                                value={currentMethod.column.flow}
                                unit={'ml/min'} />
                            </li>
                            <li className={styles.controlModeInfoListItem}>
                              <ControlInfo
                                title={'Average Velocity'}
                                value={currentMethod.column.averageVelocity}
                                unit={'cm/sec'} />
                            </li>
                            <li className={styles.controlModeInfoListItem}>
                              <ControlInfo
                                title={'Pressure'}
                                value={currentMethod.column.pressure}
                                unit={'psi'} />
                            </li>
                            <li className={styles.controlModeInfoListItem}>
                              <ControlInfo
                                title={'Holdup Time'}
                                value={currentMethod.column.holdupTime}
                                unit={'min'} />
                            </li>
                          </ul>

                        </div>
                      </div>

                    </div>

                    <div className={styles.columnsPostRun}>
                      <TitleWhithLine title={'Post Run'} />

                      <div className={styles.columnsPostRunBox}>
                        <div className={styles.controlModeInfoListItem}>
                          <ControlInfo
                            title={'Post Run'}
                            value={currentMethod.column.postRun}
                            unit={'ml/min'} />
                        </div>
                      </div>
                    </div>
                  </div>
                  : 'Loading...'}
              </div>
            </li>
          </ul>

          <div className={styles.methodTabSettings}>
            {currentMethod.name ?
              <div>
                <div className={styles.settingsTableAddBtn} >
                  <Btn_small
                    icon={'statIcon'}
                    isFill={true} />
                </div>
                <div className={styles.methodTabSettingsTitle}>
                  <TitleWhithLine title={'Pressure/Flow Settings'} />
                </div>

                <ul className={styles.methodTabSettingsRadioBtnsList}>
                  <li className={styles.methodTabSettingsRadioBtn}>
                    <input type="radio" name="methodTabSettingsRadio" id="constantPressureRadio" />
                    <label htmlFor="constantPressureRadio">Constant Pressure</label>
                  </li>
                  <li className={styles.methodTabSettingsRadioBtn}>
                    <input type="radio" name="methodTabSettingsRadio" id="rampedPressureRadio" />
                    <label htmlFor="rampedPressureRadio">Ramped Pressure</label>
                  </li>
                  <li className={styles.methodTabSettingsRadioBtn}>
                    <input type="radio" name="methodTabSettingsRadio" id="constantFlowRadio" />
                    <label htmlFor="constantFlowRadio">Constant Flow</label>
                  </li>
                  <li className={styles.methodTabSettingsRadioBtn}>
                    <input type="radio" name="methodTabSettingsRadio" id="rampedFlowRadio" />
                    <label htmlFor="rampedFlowRadio">Ramped Flow</label>
                  </li>
                </ul>

                <div className={styles.methodTabSettingsTable}>
                  <table className={styles.settingsTable}>
                    <thead>
                      <tr className={styles.settingsTableHeader}>
                        <th className={`${styles.settingsTableRow} ${styles.alignCenter}`}></th>
                        <th className={styles.settingsTableRow}>Ramp ##</th>
                        <th className={styles.settingsTableRow}>Rate, mL/min per min</th>
                        <th className={styles.settingsTableRow}>Value, mL/min</th>
                        <th className={styles.settingsTableRow}>Hold Time, min</th>
                        <th className={styles.settingsTableRow}>Run Time, min</th>
                      </tr>
                    </thead>

                    <tbody>
                      {currentMethod.pressure.tableSteps.map((step, index) =>
                        <TableRow key={uuid()}
                          selected={step.selected}
                          ramp={step.ramp}
                          rate={step.rate}
                          value={step.value}
                          holdTime={step.holdTime}
                          runTime={step.runTime} />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              : 'Loading...'}
          </div>
        </div>
      </div>

      <div className={styles.methodTabButns}>
        <div className={styles.methodTabButnsContainer}>
          <span>
            <Btn_small
              icon={'newIcon'} />
          </span>
          <span>
            <Btn_small
              icon={'moreIcon'} />
          </span>
        </div>

        <div className={styles.methodTabButnsContainer}>
          <span>
            <Btn_big
              text='Save'
              handleClick={saveMethod}
              isFill={true} />
          </span>
          <span>
            <Btn_big
              text='Save as'
              isFill={true} />
          </span>
          <span>
            <Btn_big
              text='Cancel'
              isFill={false} />
          </span>
        </div>
      </div>

    </div >
  );
}

export default Method;
