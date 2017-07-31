/* stateless functional component */
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from  'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';
import MusicNote from 'react-icons/lib/fa/music';
import { PropTypes } from 'react';

const percentToDecimal = (decimal) => {
  return((decimal * 100) + '%');
}
const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal);
}

export const ConcertDayCount = ({total=25, soldout=4, vip=2, goal=30}) => (
      <div className ="ski-day-count">
        <div className ="total-days">
          <span>{total}</span>
          <Calendar />
          <span>days</span>
        </div>
        <div className ="powder-days">
          <span>{soldout}</span>
          <SnowFlake />
          <span>days</span>
        </div>
        <div className ="backcountry-days">
          <span>{vip}</span>
          <Terrain/>
          <span>days</span>
        </div>
        <div>
          <span>{calcGoalProgress(total, goal)}</span>
        </div>
      </div>
    )

ConcertDayCount.propTypes = {
      total: PropTypes.number,
      powder: PropTypes.number,
      backcountry: PropTypes.number,
      goal: PropTypes.number
    }
