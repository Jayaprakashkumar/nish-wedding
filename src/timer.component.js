import React from 'react';
import './timer.css';
import _ from 'lodash';

export default function Timer () {

  return (
    <div className="col-12 d-flex justify-content-center align-items-center text-center">
      <FlipClock />
    </div>
  );
}

// function component
const AnimatedCard = ({animation, digit}) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const StaticCard = ({position, digit}) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const FlipUnitContainer = ({digit, shuffle, unit}) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit + 1;

  // to prevent a negative value
  if (unit !== 'hours') {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }

  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  return (
    <div className={'flipUnitContainer'}>
      <StaticCard position={'upperCard'} digit={currentDigit} />
      <StaticCard position={'lowerCard'} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
      <span className="units">{_.startCase(unit)}</span>
    </div>
  );
};

class FlipClock extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      days: 0,
      daysShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    };
  }

  componentDidMount () {
    this.timerID = setInterval (() => this.updateTime (), 50);
  }

  componentWillUnmount () {
    clearInterval (this.timerID);
  }

  updateTime () {

    let year = new Date ().getFullYear ();
    let difference = +new Date (`11/15/${year}`) - +new Date ();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor (difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor (difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor (difference / 1000 / 60 % 60),
        seconds: Math.floor (difference / 1000 % 60),
      };
    }

    // set time units
    const {days, hours, minutes, seconds} = timeLeft;

    if (days !== this.state.days) {
        const daysShuffle = !this.state.daysShuffle;
        this.setState ({
          days,
          daysShuffle,
        });
    }
    // on hour chanage, update hours and shuffle state
    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState ({
        hours,
        hoursShuffle,
      });
    }
    // on minute chanage, update minutes and shuffle state
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState ({
        minutes,
        minutesShuffle,
      });
    }
    // on second chanage, update seconds and shuffle state
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState ({
        seconds,
        secondsShuffle,
      });
    }
  }

  render () {
    // state object destructuring
    const {
      days,
      hours,
      minutes,
      seconds,
      daysShuffle,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle,
    } = this.state;

    return (
      <div className={'flipClock'}>
        <FlipUnitContainer
          unit={'days'}
          digit={days}
          shuffle={daysShuffle}
        />
        <FlipUnitContainer
          unit={'hours'}
          digit={hours}
          shuffle={hoursShuffle}
        />
        <FlipUnitContainer
          unit={'minutes'}
          digit={minutes}
          shuffle={minutesShuffle}
        />
        <FlipUnitContainer
          unit={'seconds'}
          digit={seconds}
          shuffle={secondsShuffle}
        />
      </div>
    );
  }
}
