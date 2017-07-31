import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from  'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';
import MusicNote from 'react-icons/lib/fa/music';
import { PropTypes } from 'react'

export const ConcertDayRow = ({venue, date, soldout, vip}) => (
  <tr>
    <td>
      {date.getMonth()+1}/{date.getDate()}/
      {date.getFullYear()}
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
  date: PropTypes.instanceOf(Date).isRequired,
  soldout: PropTypes.bool,
  vip: PropTypes.bool
}
