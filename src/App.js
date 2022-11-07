import Dice from './Dice';
function App() {
  //컴포넌트에 props 값을 세팅
  return (
    <div>
      <Dice color="blue" num={3} />
    </div>
  );
}
//다른 파일에서 사용할 수 있도록 디폴트로 내보냄
export default App;
