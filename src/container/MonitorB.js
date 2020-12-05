import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function MonitorB({ b }) {
  useEffect(() => {
    console.log('prop b 가 변경되었습니다!');
  }, [b]);

  return (
    <div>b 를 구독하는 컴포넌트에서 표시 : {b}</div>
  );
}

const mapStateToProps = (state) => {
  console.log('b 를 구독하는 컴포넌트의 mapStateToProps 내부에서 호출됨');

  return { b: state.b };
};

export default connect(mapStateToProps)(MonitorB);
