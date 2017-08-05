import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from  'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';
import MusicNote from 'react-icons/lib/fa/music';
import { PropTypes } from 'react'

export const ConcertDayRow = ({venue, date, soldout, vip}) => (
  <tr>
    <td>
      {date}
    </td>
    <td>
      {venue}
    </td>
    <td>
      {(soldout) ? <SnowFlake/> : null}
    </td>
    <td>
      {(vip) ? <Terrain /> : null}
    </td>
  </tr>

)
ConcertDayRow.propTypes = {
  venue: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  soldout: PropTypes.bool,
  vip: PropTypes.bool
}
