import Dice from './Dice';

function Board({ name, color, gameHistory, num, sum }) {
  //컴포넌트에 props 값을 세팅
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <Dice color={color} num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <p>{gameHistory.join(', ')}</p>
      </div>
    </div>
  );
}
//다른 파일에서 사용할 수 있도록 디폴트로 내보냄
export default Board;
