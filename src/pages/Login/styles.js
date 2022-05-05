import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .title {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
          margin-bottom: 15px;
      }
  }

  h3 {
      text-align: center;
  }

  form {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      width: 100%;
      max-width: 450px;

      input {
          margin-top: 10px;
          padding: 16px;
          border: none;
          background: #fff;     
          width: 100%; 
          box-shadow: 3px 6px 6px -9px rgba(87,87,87,0.69); 
          border-radius: 5px;
      }
  }

  button {
      margin-top: 30px;
      padding: 20px;
      border-radius: 5px;
      border: none;
      background: #151515;
      color: #F3F3F3;
      font-weight: bold;
      transition: 0.3s ease;

      &:hover {
          background-color: #333333;
      }
  }

  .link {
      text-align: center;
      margin-top: 50px;
      
      a {
        text-decoration: none;
        color: var(--primary-color);

        &:hover {
            color: #CA46F8;
        }
      }
  }
`;
