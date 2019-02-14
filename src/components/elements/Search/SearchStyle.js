import styled from 'styled-components';

const SearchStyle = styled.form`
  background-color: #fff;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  transition: all 0.3s;

  .search:focus-within {
    transform: translateY(-2px);
    box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08);
  }
  .search__field {
    border: none;
    background: none;
    font-family: inherit;
    color: inherit;
    font-size: 1.7rem;
    width: 30rem;
  }
  .search__field:focus {
    outline: none;
  }
  .search__field::placeholder {
    color: #dad0cc;
  }
`;

export default SearchStyle;
