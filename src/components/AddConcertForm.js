import { PropTypes, Component } from 'react';

const concertVenues = [
	"Barclays Center",
  "Citi Field",
	"Bethpage Center",
	"Euporium",
	"Jones Beach Theater",
	"Madison Square Garden",
	"Nassau Colisieum",
	"Paramount Theater",
  "PNC Arts Center",
	"Roseland",
	"Tilles Center",
  "Westbury Music Festival"
];

class Autocomplete extends Component {
    get value() {
      return this.refs.inputVenue.value
    }

    set value(inputValue) {
      this.refs.inputVenue.value = inputValue
    }
    render() {
      return (
        <div>
          <input ref="inputVenue"
               type="text"
               list="concert-venues" />
          <datalist id="concert-venues">
            {this.props.options.map(
              (opt, i) =>
              <option key={i}>{opt}</option>)}
          </datalist>
        </div>
      )
    }
}

export const AddConcertForm  = ({ venue, date, soldout, vip, onNewConcert }) => {

  let _venue, _date, _soldout, _vip;

  const submit = (e) =>{
    e.preventDefault();
    onNewConcert({
      venue: _venue.value,
      date: _date.value,
      soldout: _soldout.checked,
      vip: _vip.checked
    })
    _venue.value = '';
    _date.value = '';
    _soldout.checked = false;
    _vip.checked = false;
  }

  return(
      <form onSubmit = {submit} className="add-day">

        <label htmlFor="venue">Venue</label>
        <Autocomplete options={concertVenues}
  				   		  ref={input => _venue = input}/>

        <label htmlFor="date">Date</label>
        <input id="date"
             type="date"
             required
             defaultValue={date}
             ref={input => _date = input} />

        <div>
          <input id="soldout"
               type="checkbox"
               defaultChecked={soldout}
               ref={input => _soldout = input} />
          <label htmlFor="soldout">Soldout Show?</label>
        </div>

        <div>
          <input id="vip"
               type="checkbox"
               defaultChecked={vip}
               ref={input => _vip = input} />
          <label htmlFor="vip">
            VIP Passes?
          </label>
        </div>
        <button>Add Concert</button>
      </form>
  )
}

AddConcertForm.defaultProps = {
	venue: "Madison Square Garden",
	date: "2017-01-12",
	soldout: true,
	vip: false
}
  AddConcertForm.propTypes = {
  	venue: PropTypes.string.isRequired,
  	date: PropTypes.string.isRequired,
  	soldout: PropTypes.bool.isRequired,
  	vip: PropTypes.bool.isRequired
  }
