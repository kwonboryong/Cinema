import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMovie, makeBgPath } from '../api';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: black;
  border-radius: 10px;
  
  max-width: 800px;
  max-height: 800px; 

  padding: 20px;
  overflow: auto;
`;

const Box = styled.div`
  display: flex;

  img {
    width: 350px;
    height: 500px;
  }
`;

const Title = styled.div`
  width: 400px;
  padding-right: 16px;

  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 0;
  }

  span {
    font-size: 15px;
  }

  p {
    font-size: 17px;
    margin-top: 10px; 
  }

  div { 
    font-size: 17px;
    margin-top: 28px; 
  }
`;

const Average = styled.div`
  font-size: 17px;

  p {
    margin: 0;
  }
`;

const IconButton = styled.button`
  background-color: transparent;  
  border: none;
  border-radius: 50%; 
  padding: 7px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  svg {
    font-size: 28px;  
    color: #333;
  }

  &:hover {
    background-color: #ff5c5c; 
  }
`;

function MovieModal() {
  const { id } = useParams();
  const { data } = useQuery(['movie', id], () => getMovie(id));

  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };

  if (!data) return null;

  const vote_average = Math.floor(data.vote_average);
  const stars = '⭐'.repeat(vote_average);

  return (
    <ModalBackdrop onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Box>
          <Title>
            <h2>{data.title}</h2>
            <span>{data.release_date}</span>
            <Average>
              <p>{'Rating : ' + vote_average + ' / 10'}</p>
              <p>{stars}</p>
            </Average>
            <p>{'Votes : ' + data.vote_count + '명'}</p>
            <div>{data.overview}</div>
          </Title>
          <img src={makeBgPath(data.poster_path)} alt={data.title} />
        </Box>

        <IconButton onClick={handleClose}>
          <IoIosCloseCircleOutline />
        </IconButton>
      </ModalContent>
    </ModalBackdrop>
  );
}

export default MovieModal;
