import { useAuth } from "../../Providers/AuthProvider";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import { confirm } from "../../Helpers/alert";
import { useNavigate } from "react-router-dom";

export const HandleDelete = ({ revenue }) => {
  const { userData, signed } = useAuth();
  const navigate = useNavigate()

  const handleClick = () => {
    confirm("Tem certeza?", "Essa ação não poderá ser desfeita", "warning", revenue.id).finally(() => {
      navigate("/home");
    })
    
  }

  if (revenue.userId === userData?.id && signed) {
    return <Container onClick={handleClick}><MdDelete /></Container>;
  } else {
    return "";
  }
}

const Container = styled.div`
  position: absolute;
  top: 138px;
  right: 42px;
  color: #da3e00;

  svg {
    width: 40px;
    height: 40px;
  }
  svg:hover{
    transform: scale(1.2);
    cursor: pointer; 
  }

`