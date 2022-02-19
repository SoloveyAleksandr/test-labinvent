import styles from './TableRow.module.css';

function TableRow({
    selected,
    ramp,
    rate,
    value,
    holdTime,
    runTime,
}) {
    return (
        <tr className={styles.tableRow}>
            <td className={`${styles.tableCell} ${styles.alignCenter}`}>
                <input
                    // onChange={() => changeRadioState(index)}
                    defaultChecked={selected} type="radio"
                    name='tableRadio' />
            </td>
            <td className={`${styles.tableCell} ${styles.alignCenter}`}>
                <input
                    className={styles.textInput}
                    // onChange={(e) => changeInputText(e, index, 'ramp')}
                    defaultValue={ramp} type="text" />
            </td>
            <td className={`${styles.tableCell} ${styles.alignRight}`}>
                <input
                    className={styles.textInput}
                    // onChange={(e) => changeInputText(e, index, 'rate')}
                    defaultValue={rate} type="text" />
            </td>
            <td className={`${styles.tableCell} ${styles.alignRight}`}>
                <input
                    className={styles.textInput}
                    // onChange={(e) => changeInputText(e, index, 'value')}
                    defaultValue={value} type="text" />
            </td>
            <td className={`${styles.tableCell} ${styles.alignRight}`}>
                <input
                    className={styles.textInput}
                    // onChange={(e) => changeInputText(e, index, 'holdTime')}
                    defaultValue={holdTime} type="text" />
            </td>
            <td className={`${styles.tableCell} ${styles.alignRight}`}>
                <input
                    className={styles.textInput}
                    // onChange={(e) => changeInputText(e, index, 'runTime')}
                    defaultValue={runTime} type="text" />
            </td>
        </tr>
    );
}

export default TableRow;