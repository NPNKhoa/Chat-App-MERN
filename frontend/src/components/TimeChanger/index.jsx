import PropTypes from 'prop-types';
import { format, } from 'date-fns';

const TimeChanger = ({ isoString, }) => {
    if(!isoString) return;
    const date = new Date(isoString)
    date.getUTCDate();
    // const hours = date.getUTCHours();
    // const minutes = date.getUTCMinutes();
    // console.log(date);
    const timeString = format(date, 'HH:mm');

    // console.log(hours, minutes);

    return (
      <time className='text-xs opacity-50'>
        {timeString}
      </time>
    );
};

TimeChanger.propTypes = {
    isoString: PropTypes.string,
}

export default TimeChanger;