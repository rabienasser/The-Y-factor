import styled from "styled-components";

export const StyledBox = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 33.33%;
   padding: 25px;
   margin: 0 15px;
   box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

   @media (max-width: 875px) {
      width: 50%;
      margin: 1.5rem 0;
   }
   @media (max-width: 680px) {
      width: 80%;
   }

   .icon {
      height: 65px;
      width: 65px;
      margin-bottom: 20px;
      color: var(--third-color);

      @media (max-width: 1100px) {
         height: 50px;
         width: 50px;
      }
   }

   h4 {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: var(--third-color);
   }

   p {
      text-align: center;
      font-size: 1rem;
   }
`;
