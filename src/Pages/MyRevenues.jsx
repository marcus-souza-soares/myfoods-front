/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../Components/Header/Header"
import { Categories } from "../Components/Categories"
import { RevenuesList } from "../Components/Main/RevenuesList"
import { useEffect } from "react"
import { useRevenues } from "../Providers/revenuesProvider"
import { getMyRevenues } from "../services/requests"
import { useAuth } from "../Providers/AuthProvider"

export function MyRevenues() {
  const { errorMessage, signed } = useAuth();
  const { revenues, setRevenues } = useRevenues();
  useEffect(() => {
    getMyRevenues().then(res => {
      setRevenues(res.data);
      console.log(res.data)
    }).catch(e => {
      errorMessage(e.response.data);
    })
  }, [signed]);
  return (
    <>
      <Header />
      <Categories />
      <RevenuesList revenues={revenues} />
    </>
  )
}

