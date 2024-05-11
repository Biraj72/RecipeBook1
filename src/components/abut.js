import styled from "styled-components";
export const AboutUsContainer = styled.div`

  padding: 30px;
`;

export const AboutDescription = styled.div`
  background-color:#f2f2f2;
  display:flex;
  flex-direction:row;
  justify-content:center;
  padding: 50px 150px 50px;
  border-radius: 10px;
  margin-bottom: 20px;
  color: black;
  height: 500px;
`;


export const Section = styled.div`

  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h2{
    text-align: left;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left:10px;
`;

export const Heading = styled.h1`
  margin: 0;
padding: 20px;
margin-right: 30px;
`;
export const GirlDiv = styled.div`
  width: 40%;
`;

export const GuffDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const AboutCard = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 3px 10px 0 #aaa;
  border-radius: 20px;
`;

export const PersonImage = styled.img`
  width: 200px;
  border-radius: 50%;
`;