import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function MonitorC({ c }) {
  useEffect(() => {
    console.log('prop c 가 변경되었습니다!');
  }, [c]);

  return (
    <div> c 를 구독하는 컴포넌트에서 표시 : {c}</div>
  );
}

const mapStateToProps = (state) => {
  console.log('c 를 구독하는 컴포넌트의 mapStateToProps 내부에서 호출됨');

  return { c: state.c };
};

export default connect(mapStateToProps)(MonitorC);
