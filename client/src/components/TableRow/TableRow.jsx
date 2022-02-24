import TextTableCell from '../TextTableCell/TextTableCell';
import styles from './TableRow.module.css';

function TableRow({
    selected,
    ramp = '(initial)',
    rate = '',
    value = 16.849,
    holdTime = 0,
    runTime = 0,
    changeSelectedInput,
    changeRampInput,
    changeRateInput,
    changeValueInput,
    changeHoldTimeInput,
    changeRunTimeInput,
}) {

    return (
        <tr className={styles.tableRow}>
            <td className={`${styles.tableCell} ${styles.alignCenter}`}>
                <input
                    onChange={(e) => changeSelectedInput()}
                    defaultChecked={selected} type="radio"
                    name='tableRadio' />
            </td>

            <TextTableCell
                value={ramp}
                onChange={(value) => changeRampInput(value)} />

            <TextTableCell
                alignCenter={false}
                value={rate}
                onChange={(value) => changeRateInput(value)} />

            <TextTableCell
                alignCenter={false}
                value={value}
                onChange={(value) => changeValueInput(value)} />

            <TextTableCell
                alignCenter={false}
                value={holdTime}
                onChange={(value) => changeHoldTimeInput(value)} />

            <TextTableCell
                alignCenter={false}
                value={runTime}
                onChange={(value) => changeRunTimeInput(value)} />

            {/* <td
                className={`${styles.tableCell} ${styles.alignCenter}`}>
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
            </td> */}
        </tr>
    );
}

export default TableRow;
