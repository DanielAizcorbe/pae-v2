import { styled } from "styled-components";

const ImportantText = ({ underline, children }) => {

    return (
        <B $underline={underline}>
            {children}
        </B>    
    );
}

const B = styled.span`
    font-weight: bolder;
    text-decoration: ${props => props.$underline ? "underline" : "none"};
`;

export { ImportantText }