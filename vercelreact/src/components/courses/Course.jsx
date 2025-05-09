import PropTypes from 'prop-types';

const Course = ({img, title, desc}) => (
  <li className="course media group">
    <img className="course-img" src={img} alt="course" />
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </li>
);

Course.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Course;