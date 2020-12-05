import React  from 'react';
import { connect } from 'react-redux';
import { setA, setB, setC } from '../reducer';

function ControlPanel({
  dispatchSetA,
  dispatchSetB,
  dispatchSetC,
}) {
  return (
    <div id="control-area">
      <button value="setA" onClick={dispatchSetA}> dispatch set A </button>
      <button value="setB" onClick={dispatchSetB}> dispatch set B </button>
      <button value="setC" onClick={dispatchSetC}> dispatch set C </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  a: state.a,
  b: state.b,
  c: state.c,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetA: () => dispatch(setA()),
  dispatchSetB: () => dispatch(setB()),
  dispatchSetC: () => dispatch(setC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
