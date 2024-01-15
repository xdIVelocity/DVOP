import PropTypes from 'prop-types';

const NavItem = ({ children, ...rest }) => {
    return (
        <h5 className="text-light_text mx-1" {...rest}>
            {children}
        </h5>
    );
}

NavItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NavItem;