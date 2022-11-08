//단순히 보여주기 용으로만 사용할때에는 children props를 사용하면 좋다
//이렇게 사용하게 되면 보다 직관적으로 사용할 수 있기 때문이다.
//App.js에서 사용하는 방법
//<Button>던지기</Button> 이렇게만 작성해도 children prop이 자동으로 던지기가 값임을 인지하고 할당해준다.
function Button({ children }) {
  return <button>{children}</button>;
}
export default Button;
