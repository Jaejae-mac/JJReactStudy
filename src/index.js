import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//render 화면을 그리는 메소드로 html 태그를 만들어주는 역할을 한다.
const root = ReactDOM.createRoot(document.getElementById('root'));
//직접 태그를 넣어주는 것을 볼 수 있는데,
//이는 JSX 문법이다.
//jsx는 html 태그와 자바스크립트를 같이 사용할 수 있게 해주는 문법의  종류이다.
/**
 * jsx문법에서는 id속성을 사용할수는 있지만
 * class, for 와같은 속성은 사용할 수 없다.
 * js에서 Class를 객체를 만들때 사용하기 때문이다.
 * 그래서 class 속성을 사용하고 싶다면 className = "" 을 사용해야 한다.
 * for도 마찬가지 이다.
 * htmlFor = "" 라고 작성해야 한다.
 * 또한 JSX에서 html의 이벤트 핸들러속성을 작성할때에는 카멜케이스로 작성해야한다.
 *
 * 2. JSX 에서는 하나로 감싸진 태그를 한개씩 사용해야한다.
 * 즉, <p></p>
 *    <p></p>
 * 이렇게 작성하면 오류가 난다.
 * <p></p>,
 * <p></p>
 * 이렇게 작성하거나
 *
 * <div></div> 태그 즉, 하나의 태그인 그룹으로 감싸주면 된다.
 *
 * 또는 <Fragment></Fragment> 태그로 감싸주면 div 태그를 사용하지 않고도 각각의 개별 태그로 사용할 수 있다.
 * Fragment는 <></> 아무것도 적지않은 태그문법으로도 대체 가능하다.
 */
/**
 * 리액트로 작성한 코드는 최종적으로는
 * 자바스크립트로 번역된다.
 * 그래서 리액트 코드가 .js 파일이냐 .jsx 파일이냐는 크게 중요하지 않다
 * 리액트 코드를 자바스크립트로 바꾸는 과정에서 이것들을 표준적인 JS vkdlffh qkRnjwnsek.
 * 즉, 우리는 리액트의 jsx 관련사항은 jsx파일로 만들어주면되고
 * 일반적인 js는 js 파일로 만들어주면된다.
 *  */

/**
 * JSX 문법에서는 {} 안에 자바스크립트 표현식을 사용할 수 있고
 * {} 안에서는 자바스크립트 표현식만 사용할 수 있으며 if문 for문등과같은 것들은 사용할 수 없다.
 */

root.render(<App />);
