var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../utils/utils');
var getDate = utils.getDate;

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = '/app/images/weather-icons/' + props.day.weather[0].icon + '.svg';
  return (
    <div style={styles.dayContainer}>
      <img style={styles.weather} src={icon}  alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  );
}

function ForecastUI (props) {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={styles.header}>{props.location}</h1>
      <p style={styles.subheader}>Select a day</p>
      <div style={styles.container}>
        {props.forecast.list.map(function (item) {
          return <DayItem key={item.dt} day={item} />
        })}
      </div>
    </div>
  );
}

function Forecast (props) {
  return (
    <div>
      {
        props.isLoading === true
          ? <h1 style={styles.header}>Loading</h1>
          : <ForecastUI
            location={props.location}
            forecast={props.forecast}
            />
      }
    </div>
  )
}

Forecast.propTypes = {
  location: PropTypes.string.isRequired,
  forecast: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

module.exports = Forecast;
