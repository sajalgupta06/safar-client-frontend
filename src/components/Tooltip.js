import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// import './Tooltip.css';

const Tooltip = ({ children, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const [tooltipPlacement, setTooltipPlacement] = useState('top');

//   useEffect(() => {
//     if (showTooltip) {
//       const tooltip = tooltipRef.current;
//       const tooltipRect = tooltip.getBoundingClientRect();
//       const screenRect = document.body.getBoundingClientRect();

//       // Check if tooltip overflows to the right or left of the screen
//       const isOverflowingRight = tooltipRect.right > screenRect.right;
//       const isOverflowingLeft = tooltipRect.left < screenRect.left;

//       if (isOverflowingRight) {
//         setTooltipPlacement('leftTop');
//       } else if (isOverflowingLeft) {
//         setTooltipPlacement('rightTop');
//       } else {
//         setTooltipPlacement('top');
//       }
//     }
//   }, [showTooltip]);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="tooltip-container" onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
      {children}
      {showTooltip && (
        <div className={`ant-tooltip ant-tooltip-placement-${tooltipPlacement}`} role="tooltip" ref={tooltipRef}>
          <div className="ant-tooltip-arrow"></div>
          <div className="ant-tooltip-inner">{content}</div>
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
};

export default Tooltip;
