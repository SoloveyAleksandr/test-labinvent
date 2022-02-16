import Icon from '../Icon/Icon';
import runIcon from '../../images/runIcon.png';
import stoppedIcon from '../../images/stoppedIcon.png';
import inletsImg from '../../images/inlets.png';
import columnImg from '../../images/column.png';
import detectorImg from '../../images/detector.png';
import sequenceArrow from '../../images/bigArrow.png';
import TitleWhithLine from '../TitleWhithLine/TitleWhithLine';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import styles from './Method.module.css';

function Method() {
  const [currentMethod, setCurrentMethod] = useState('');

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/api/v1/method/current';
    axios.get(apiUrl).then((resp) => {
      const currentMethod = resp.data;
      setCurrentMethod(currentMethod);
    });
  }, [setCurrentMethod]);

  function getTime(value) {
    const time = Math.floor(+value / 60 / 60) > 10 ? Math.floor(+value / 60 / 60) : `0${Math.floor(+value / 60 / 60)}`;
    const minutes = Math.floor(+value / 60 % 60) > 10 ? Math.floor(+value / 60 % 60) : `0${Math.floor(+value / 60 % 60)}`;
    const seconds = +value % 60 > 10 ? +value % 60 : `0${+value % 60}`;
    if (+time > 0) {
      return `${time}:${minutes}:${seconds}`;
    } else return `${minutes}:${seconds}`
  }
  console.log(currentMethod);
  return (
    <div className={styles.method}>
      <div className={styles.header}>
        {currentMethod ?
          <ul className={styles.headerInfoList}>
            <li className={styles.headerInfoListItem}>
              <h2 className={styles.headerInfoListTitle}>worklist</h2>
            </li>
            <li className={styles.headerInfoListItem}>
              {currentMethod.status === 'RUN' ?
                <button className={styles.runBtn}>
                  <span className={styles.runBtnIcon}>
                    <Icon image={runIcon} />
                  </span>
                  RUN
                </button>
                :
                <button className={`${styles.runBtn} ${styles.stopped}`}>
                  <span className={styles.runBtnIcon}>
                    <Icon image={stoppedIcon} />
                  </span>
                  STOPPED
                </button>
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
                currentMethod ?
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
        <ul className={styles.methodTabBtnsList}>
          <li className={styles.methodTabBtn}>ALS</li>
          <li className={styles.methodTabBtn}>Inlets</li>
          <li className={`${styles.methodTabBtn} ${styles.activeMetodTab}`}>Columns</li>
        </ul>

        <ul className={styles.tabContentList}>
          <li className={styles.tabContentListItem}>
            <h1>ALS</h1>
          </li>
          <li className={styles.tabContentListItem}>
            <h1>Inlats</h1>
          </li>
          <li className={`${styles.tabContentListItem} ${styles.activeContentItem}`}>
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
                  {/* (Initial): 0 min ArMe @ 35 Oc Oven Out: Ambient Pressure 25 m * */}
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
              {currentMethod ?
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
                            <span className={styles.controlModeInfoListTitle}>
                              Flow
                            </span>
                            <div className={styles.controlModeInfoListValueBox}>
                              <span className={styles.controlModeInfoListValue}>
                                {currentMethod.column.flow || '-'}
                              </span>
                              <span className={styles.controlModeInfoListUnit}>
                                ml/min
                              </span>
                            </div>
                          </li>
                          <li className={styles.controlModeInfoListItem}>
                            <span className={styles.controlModeInfoListTitle}>
                              Average Velocity
                            </span>
                            <div className={styles.controlModeInfoListValueBox}>
                              <span className={styles.controlModeInfoListValue}>
                                {currentMethod.column.averageVelocity || '-'}
                              </span>
                              <span className={styles.controlModeInfoListUnit}>
                                cm/sec
                              </span>
                            </div>
                          </li>
                          <li className={styles.controlModeInfoListItem}>
                            <span className={styles.controlModeInfoListTitle}>
                              Pressure
                            </span>
                            <div className={styles.controlModeInfoListValueBox}>
                              <span className={styles.controlModeInfoListValue}>
                                {currentMethod.column.pressure || '-'}
                              </span>
                              <span className={styles.controlModeInfoListUnit}>
                                psi
                              </span>
                            </div>
                          </li>
                          <li className={styles.controlModeInfoListItem}>
                            <span className={styles.controlModeInfoListTitle}>
                              Holdup Time
                            </span>
                            <div className={styles.controlModeInfoListValueBox}>
                              <span className={styles.controlModeInfoListValue}>
                                {currentMethod.column.holdupTime || '-'}
                              </span>
                              <span className={styles.controlModeInfoListUnit}>
                                min
                              </span>
                            </div>
                          </li>
                        </ul>

                      </div>
                    </div>

                  </div>

                  <div className={styles.columnsPostRun}>
                    <TitleWhithLine title={'Post Run'} />

                    <div className={styles.columnsPostRunBox}>
                      <div className={styles.controlModeInfoListItem}>
                        <span className={styles.controlModeInfoListTitle}>
                          Post Run
                        </span>
                        <div className={styles.controlModeInfoListValueBox}>
                          <span className={styles.controlModeInfoListValue}>
                            {currentMethod.column.postRun || '-'}
                          </span>
                          <span className={styles.controlModeInfoListUnit}>
                            ml/min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                : 'Loading...'}
            </div>
          </li>
        </ul>

        <div className={styles.methodTabSettings}>
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
              {currentMethod ?
                <tbody>
                  {currentMethod.pressure.tableSteps.map((step) =>
                    <tr key={uuid()} className={styles.settingsTableRow}>
                      <td className={`${styles.settingsTableRow} ${styles.alignCenter}`}>
                        <input readOnly checked={step.selected} type="radio" name="settingsTableRadio" id="" />
                      </td>
                      <td className={`${styles.settingsTableRow} ${styles.alignCenter}`}>{step.ramp}</td>
                      <td className={`${styles.settingsTableRow} ${styles.alignRight}`}>{step.rate}</td>
                      <td className={`${styles.settingsTableRow} ${styles.alignRight}`}>{step.value}</td>
                      <td className={`${styles.settingsTableRow} ${styles.alignRight}`}>{step.holdTime}</td>
                      <td className={`${styles.settingsTableRow} ${styles.alignRight}`}>{step.runTime}</td>
                    </tr>
                  )}
                </tbody>
                : <tbody></tbody>}

            </table>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Method;
