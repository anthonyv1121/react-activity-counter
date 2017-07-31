import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from  'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';
import MusicNote from 'react-icons/lib/fa/music';
import { ConcertDayRow } from './ConcertDayRow';
import { PropTypes } from 'react';
import { Link } from 'react-router'

export const ConcertDayList = ({days, filter}) => {
	const filteredDays = (!filter ||
  		!filter.match(/soldout|vip/))?
  		days:
  		days.filter(day => day[filter])
	return(
		<div className="ski-day-list">
		<table>
			<thead>
				<tr>
					<th>Date</th>
					<th>Venue</th>
					<th>Soldout</th>
					<th>VIP</th>
				</tr>
				<tr>
					<td colSpan={4}>
						<Link to="/list-concerts">
							All Concerts
						</Link>
						<Link to="/list-concerts/soldout">
							Soldout Concerts
						</Link>
						<Link to="/list-concerts/vip">
							VIP Concerts
						</Link>
					</td>
				</tr>
			</thead>
			<tbody>
				{filteredDays.map((day, i) =>
					// <ConcertDayRow key={i} venue={day.venue} date ={day.date} soldout={day.soldout} vip={day.vip}/>
					<ConcertDayRow key={i}
												 {...day}/> // ES6 spread operator: pushes all of the properties from the array into the props objects
					)}
			</tbody>

		</table>
		</div>
	)

}
ConcertDayList.propTypes = {
	// custom validation of props
	days: function(props) {
		if(!Array.isArray(props.days)) { // if not array
			return new Error(
				"ConcertDayList should be an array"
				)
		} else if(!props.days.length) {
			return new Error(
				"ConcertDayList must have at least one record"
				)
		} else {
			return null
		}
	}
}
