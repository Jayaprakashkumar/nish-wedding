import { React, Component } from 'react';
import './home.css';
import Timer from './timer.component';

class HomeComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      isScrolling: false
    };
  }

  goToHome = () => {
    window.scrollTo(0, 0);
    this.setState({ isScrolling: false });

  }

  onScroll = (event) => {
    if (window.pageYOffset === 0) {
      this.setState({ isScrolling: false });
    } else {
      this.setState({ isScrolling: true });
    }

    if (window.pageYOffset >= 300) {
      this.setState({ backgroundColor: true })
    } else {
      this.setState({ backgroundColor: false })
    }

  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    // window.scrollBy(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }


  render() {
    const { isScrolling } = this.state;
    return (
      <div>


        <div className="col-12 display-name-wrapper d-flex justify-content-center align-items-center text-center">
          <div>
            <p>Nishanth</p>
            <p className="secondary-color">&</p>
            <p>Divya</p>
            <p className="mt-3 date-font">14/11/2021</p>
          </div>
        </div>

        <Timer />

        <div className="col-12 d-flex justify-content-center mb-5 mt-5">

          <div className="live-video col-sm-12 col-md-6 col-lg-6">
            <div className="text-center">
              <div className="d-flex justify-content-center align-items-center">
              <img src="../video.png" alt="live-video icon" />
              </div>
              <p>Thinks are beautiful when seen in person,
                We really love your presence,
                Just incase if you are not able to make it,</p>

              <p>
                Live streaming starts on the Big day.</p>
            </div>
          </div>

        </div>
        <div id="location" className="col-12 d-flex justify-content-center align-items-center text-center mb-4">
          <div className="col-sm-12 col-md-6 col-lg-6 p-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.239645883364!2d80.24834631540546!3d13.083992890782149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265df1e93e413%3A0x7bca8f682e1ad531!2sPTR%20Kalyana%20Mandapam!5e0!3m2!1sen!2sca!4v1631668800628!5m2!1sen!2sca" width="100%" height="300" className="border-0" allowFullScreen="true" loading="lazy"></iframe>
          </div>
        </div>

        {isScrolling && <div className="arrow" onClick={this.goToHome}><img src="../arrow.png" alt="arrow" className="w-100" /></div>}
      </div>
    );
  }
}

export default HomeComponent;
