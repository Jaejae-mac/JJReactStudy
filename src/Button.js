//단순히 보여주기 용으로만 사용할때에는 children props를 사용하면 좋다
//이렇게 사용하게 되면 보다 직관적으로 사용할 수 있기 때문이다.
//App.js에서 사용하는 방법
//<Button>던지기</Button> 이렇게만 작성해도 children prop이 자동으로 던지기가 값임을 인지하고 할당해준다.
const baseButtonStyle = {
  padding: '15px 27px',
  outline: 'none',
  backgroundColor: 'rgba(0, 89, 255, 0.2)',
  color: '#7090ff',
  cursor: 'pointer',
  borderRadius: '30px',
  fontSize: '17px',
};
const blueButtonStyle = {
  ...baseButtonStyle,
  backgroundColor: 'rgba(0,89,255,0.2)',
  border: 'solid 1px #7080ff',
  color: '#7080ff',
};
const redButtonStyle = {
  ...baseButtonStyle,
  backgroundColor: 'rgba(255, 78,78,0.2)',
  border: 'solid 1px #ff4664',
  color: '#ff4664',
};
function Button({ children, onClick, color }) {
  const style = color === 'red' ? redButtonStyle : blueButtonStyle;
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
