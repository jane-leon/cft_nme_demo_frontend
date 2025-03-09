import PropTypes from 'prop-types'

function Schedule(props){
    return(
        <div>
        <p>IsFive: {props.isFive ? "Yes" : "No"}</p>
        <p>playNext: {props.team}</p>
        <p>games: {props.games}</p>
        </div>

    );
}

//for invalid passing, like passing a number for a string 
Schedule.propTypes = {
    IsFive: PropTypes.bool, 
    playNext: PropTypes.string,
    games: PropTypes.number,
}

//default params
Schedule.defaultProps = {
    isFive: true,
    playNext: "None",
    games: 0,
}

export default Schedule
