import styled from 'styled-components';

const HeaderStyle = styled.header`
  grid-area: head;
  background-color: #f9f5f3;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header__logo {
    margin-left: 4rem;
    height: 4.5rem;
    display: block;
  }
`;

export default HeaderStyle;
