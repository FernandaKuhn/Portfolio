import styled from "@emotion/styled";
import { ReactNode } from "react";


interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}


const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {

    const StyledButton = styled.button`
  background-color: #171717 ;
  border: 1px solid #d17104;
  border-radius: 35px;
  padding: 5px 15px;
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  color: #e8e8e8;
  &:hover {
  background-color: #d17104;
  }
`;


    return (
        <>
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton