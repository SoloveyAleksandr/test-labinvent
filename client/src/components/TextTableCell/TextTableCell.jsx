import { useState } from 'react';

import styles from './TextTableCell.module.css';

function TextTableCell({
  alignCenter = true,
  onChange,
  value = ''
}) {

  const [inFocus, setInFocus] = useState(false);

  return (
    <td
      className={alignCenter ?
        `${styles.tableCell} ${styles.alignCenter}` :
        `${styles.tableCell} ${styles.alignRight}`}
      onDoubleClick={() => setInFocus(true)}>
      <input
        className={styles.textInput}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        value={value}
        disabled={inFocus ? false : true}
        onBlur={() => setInFocus(false)} />
    </td>
  );
}

export default TextTableCell;
