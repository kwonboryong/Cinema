import styled from 'styled-components';
import { Link, useMatch } from 'react-router-dom';
import { motion } from 'framer-motion';

const MenuWrapper = styled.div`
  font-size: 17px;
  border-top: 3px solid yellow;
  border-bottom: 3px solid yellow;

  margin-bottom: 30px;
  padding: 18px;

  display: flex;
  justify-content: center;
  gap: 60px;

  a {
    color: inherit;
    text-decoration: none;
    outline: none; 
  }
`;

const Menu = styled.div`
  position: relative;
`;

const Circle = styled(motion.span)`
  width: 6px;
  height: 6px;
  border-radius: 5px;
  background-color: red;

  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

function Header() {
  const popularMatch = useMatch('/popular');
  const comingMatch = useMatch('/coming');
  const nowMatch = useMatch('/now');

  return (
    <div>
      <MenuWrapper>
        <Menu>
          <Link to="/popular">
            POPULAR {popularMatch && <Circle layoutId="circle" />}
          </Link>
        </Menu>
        <Menu>
          <Link to="/coming">
            COMING SOON {comingMatch && <Circle layoutId="circle" />}
          </Link>
        </Menu>
        <Menu>
          <Link to="/now">
            NOW PLAYING {nowMatch && <Circle layoutId="circle" />}
          </Link>
        </Menu>
      </MenuWrapper>
    </div>
  );
}

export default Header;
