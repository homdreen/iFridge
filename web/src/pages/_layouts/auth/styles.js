import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #d1191d, #d119c8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 415px;
  text-align: center;
  background: #fff;
<<<<<<< HEAD
=======
  /* border-radius: 4px; */
>>>>>>> b301c18eed188e88a872075c7fde9ae423bb7874
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;

  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;

  padding: 20px;

  p {
    margin-top: 5px;
    opacity: 0.7;
<<<<<<< HEAD
    font-weight: bold;
=======
>>>>>>> b301c18eed188e88a872075c7fde9ae423bb7874
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      border: 0;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      color: #7159c1;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
`;
