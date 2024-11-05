import PropTypes from "prop-types";

const DashboardNavTitle = ({ title }) => {
    return (<h2 className="text-3xl font-semibold">{title}</h2>);
};
DashboardNavTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default DashboardNavTitle;