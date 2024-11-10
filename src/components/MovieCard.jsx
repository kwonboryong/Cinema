import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Card = styled.div`
  width: 230px;
  height: 400px;
  
  li {
    list-style-type: none; 

    h3 {
      font-size: 18px;
      text-align: center;
      margin-top: 10px;
    }
  }
`;

const MotionImage = styled(motion.img)`
  width: 230px;
  height: 330px;
  border-radius: 15px;
`;

function MovieCard({ id, title, src }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(`movie/${id}`, { state: { background: location } });
  };

  return (
    <Card onClick={handleClick}>
      <li key={id}>
        <MotionImage
          src={src}
          alt={title}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'linear' }}
        />
        <h3>{title}</h3>
      </li>
    </Card>
  );
}

export default MovieCard;
