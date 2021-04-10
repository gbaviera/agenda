import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #9fc2cc;
  display: flex;
  /* align-items: center; */
`;

export const TableContainer = styled.section`
  margin-top: 24px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

      td {
        padding: 20px 32px;
        border: 0;
        background: #fff;
        font-size: 16px;
        font-weight: normal;
        color: #969cb3;

        &.title {
          color: #363f5f;
      }

      td:first-child {
        border-radius: 8px 0 0 8px;
      }

      td:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
  }
  `;

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(+50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

animation: ${appearFromBottom} 1s;

form {
  margin: 80px 0;
  width: 340px;
  text-align: center;

  h1 {
    margin-bottom: 24px;
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
}

> a {
  color: #9fc2cc;
  display: block;
  margin-top: 24px;
  text-decoration: none;
  transition: color 0.2s;

  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }

  &:hover {
    color: ${shade(0.2, '#9fc2cc')};
  }
}
`;