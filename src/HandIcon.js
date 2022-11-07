import rockImg from './assetsEx01/rock.svg';
import scissorImg from './assetsEx01/scissor.svg';
import paperImg from './assetsEx01/paper.svg';

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({ value }) {
  const src = IMAGES[value];
  return <img src={src} alt={value} />;
}

export default HandIcon;
