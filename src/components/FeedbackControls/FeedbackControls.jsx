import React from 'react';
import PropTypes from 'prop-types';
import { Button, Li, Ul } from './FeedbackControls.styled';

const Controls = ({ options, onLeaveFeedback }) => {
  return (
    <Ul>
      {options.map((option, index) => {
        return (
          <Li key={index}>
            <Button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
};

export default Controls;

Controls.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
