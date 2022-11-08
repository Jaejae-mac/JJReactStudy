import Button from './Button';
import Dice from './Dice';
function App() {
  //컴포넌트에 props 값을 세팅
  return (
    <div>
      <div>
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color="blue" num={3} />
    </div>
  );
}
//다른 파일에서 사용할 수 있도록 디폴트로 내보냄
export default App;
