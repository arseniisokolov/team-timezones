import { Person } from '../../../../types';
import { applyTimezone } from '../../utils/date';

import styles from './styles.module.css';

export const PersonRow = (props: Person) => {
    const { firstName, lastName, timeZone , city} = props;
    const calculateDate = applyTimezone(new Date());

    return (
        <div className={styles.row}>
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{city}</div>
            <div>{calculateDate(timeZone).toString()}</div>
        </div>
    );
};