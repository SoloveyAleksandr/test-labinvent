import { changeTextInput } from '../../store';
import styles from './TableRow.module.css';

function TableRow({
    selected,
    ramp,
    rate,
    value,
    holdTime,
    runTime,
    changeSelectedInput,
    changeRampInput,
    changeRateInput,
    changeValueInput,
    changeHoldTimeInput,
    changeRunTimeInput,
    onblur,
}) {
    return (
        <tr className={styles.tableRow}>
            <td className={`${styles.tableCell} ${styles.alignCenter}`}>
                <input
                    onChange={() => changeSelectedInput()}
                    defaultChecked={selected} type="radio"
                    name='tableRadio' />
            </td>
            <td className={`${styles.tableCell} ${styles.alignCenter}`}>
                <input
                    className={styles.textInput}
                    onChange={(e) => changeRampInput(e.target.value)}
                    type="text"
                    value={ramp || ''} />
            </td>
            <td className={`${styles.tableCell} ${styles.alignRight}`}>
                <input
                    className={styles.textInput}
                    onChange={(e) => changeRateInput(e.target.value)}
                    type="text"
                    value={rate || ''} />
            </td>
            <td className={`${styles.tableCell} ${styles.alignRight}`}>
                <input
                    className={styles.textInput}
                    onChange={(e) => changeValueInput(e.target.value)}
                    type="text"
                    value={value || ''} />
            </td>
            <td className={`${styles.tableCell} ${styles.alignRight}`}>
                <input
                    className={styles.textInput}
                    onChange={(e) => changeHoldTimeInput(e.target.value)}
                    type="text"
                    value={holdTime || ''} />
            </td>
            <td className={`${styles.tableCell} ${styles.alignRight}`}>
                <input
                    className={styles.textInput}
                    onBlur={onblur}
                    onChange={(e) => changeRunTimeInput(e.target.value)}
                    type="text"
                    value={runTime || ''} />
            </td>
        </tr>
    );
}

export default TableRow;
