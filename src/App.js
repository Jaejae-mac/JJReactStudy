import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  /**
   * state 를 변경해주면 리액트가 자동으로 화면을 새로 렌터링 해준다.
   *
   * useState함수는 파라미터로 초기값을 전달받고
   * 위 함수를 실행한 다음에는 배열의 형태로 요소 2개의 값을 리턴받게된다.
   * 그래서 배열의 destructuring 문법으로 작성하게된다.
   * 1번째 요소는 state값이고 현재 변수의 값을 나타낸다
   * useState 함수를 호출할 때 전달한 초기값이 1번째 값에 할당된다.
   * 2번째 요소는 setter함수이다 이 함수를 호출할 때 전달하는 파라미터 값으로 1번째 값이 변경되게 된다.
   * 1번째 값을 변경할때에는 반드시 setter 함수로 변경해주어야 한다.
   */
  const [num, setNum] = useState(1);
  //점수의 합계를 구할 states
  const [sum, setSum] = useState(0);
  //참조형 state
  //참조형 (배열) 은 변수가 주소를 가지고 있기 때문에 주소값이 같다면 state 가 변경되었다고 판단하지 않는다.
  //따라서 참조형으로 state를 사용할때에는 화면이 바뀌기 위해서는 반드시 새로운 값으로 할당해주어야 한다.
  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    //gameHistory.push(nextNum);
    setGameHistory([...gameHistory, nextNum]);
  };
  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  };

  //컴포넌트에 props 값을 세팅
  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="blue" num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <p>{gameHistory.join(', ')}</p>
      </div>
    </div>
  );
}
//다른 파일에서 사용할 수 있도록 디폴트로 내보냄
export default App;
