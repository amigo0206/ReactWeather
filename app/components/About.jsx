var React = require('react');

var About = (props) => {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus.
        </p>
        <p>
          <u>Here are some of the Tools I used:</u>
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the Javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
          </li>
        </ul>
      </div>
    )
  };

module.exports = About;
