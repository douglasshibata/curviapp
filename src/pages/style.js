import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 90%;
  background: #2DBEB7;
  margin-top:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content{
    color: #F0F0F0;
    margin-bottom: 15px;
    border: 1px solid #000;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #000;
    font-size: 15px;
    background-color: #fff;
    width: 50%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #3aa39f;
    font-size: 23px;
    background: #000;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #402;
    text-decoration: none;
  }
  a:hover{
    color: #869;
  }
`;

export const Box = styled.div`
  button {
    margin-top:20px;
    color: #3aa39f;
    font-size: 23px;
    background: #fff;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #402;
    text-decoration: none;
  }
  a:hover{
    color: #978429;
  }
`;
