import { Col, Row } from 'antd';
import React from 'react';

const CalculatorKeyPadRow = ({ buttonContent, onPressCalculator }) => {
  return (
    <Row className="keypad-row">
      {/* <div>Row</div> */}
      {buttonContent.map(item => (
        <Col
          span={item !== '=' ? 6 : 12}
          key={item}
          id={item}
          className={
            [...Array(10).keys()].includes(parseInt(item))
            ? "btn btn-number"
            : item === "="
            ? "btn btn-submit"
            : "btn"
          }
          onClick={onPressCalculator}
        >
          {item}
        </Col>
      ))}
    </Row>
  );
}

export default CalculatorKeyPadRow;