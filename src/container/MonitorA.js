import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function MonitorA({ a }) {
  useEffect(() => {
    console.log('prop a 가 변경되었습니다!');
  }, [a]);

  return (
    <div>a 를 구독하는 컴포넌트에서 표시 : {a}</div>
  );
}

const mapStateToProps = (state) => {
  console.log('a 를 구독하는 컴포넌트의 mapStateToProps 내부에서 호출됨');

  return { a: state.a };
};

export default connect(mapStateToProps)(MonitorA);
