import { BiSearchAlt } from "react-icons/bi";
import styled from "styled-components";
import { DebounceInput } from 'react-debounce-input';
import { getSearchList } from "../../services/requests.js";


export function Search({  setSearchList, setDisplayStatus }) {
  let search = '';

  async function handleSearch() {
    try {
      const revenues = await getSearchList(search);
      console.log(revenues.data)
      setSearchList(revenues.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          type='text'
          placeholder='Procurar por receitas...'
          onBlur={() => setTimeout(() => setDisplayStatus('none'), 300)}
          onFocus={() => setDisplayStatus('block')}
          onChange={(e) => {
            search = e.target.value;
            if (search.length > 0) {
              handleSearch();
            } else {
              setSearchList([]);
            }
          }}
          value={search}
          style={{ zIndex: '1' }}
        />
        <BiSearchAlt />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 50%;
  align-items: center;

  input {
    width: 100%;
    height: 38px;
    background: #FFFFFF;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding-left: 10px;
  }

  svg {
    margin-left: 10px;
  }
  @media screen and (max-width: 768px){
    input{
      width: 100%;
    }
  }
`