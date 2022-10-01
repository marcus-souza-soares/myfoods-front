import { BiUserCircle } from "react-icons/bi";
import { useAuth } from "../Providers/AuthProvider";

export function UserIcon() {
  function handleClick() {
    if (!signed) return alert("Você precisa estar logado pra continuar!");
    console.log("pode continuar!");
  }
  const { signed } = useAuth();
  return (
    <BiUserCircle onClick={handleClick} />
  )
}