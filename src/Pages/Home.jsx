import { Header } from "../Components/Header/Header"
import { Categories } from "../Components/Categories"
import { RevenuesList } from "../Components/Main/RevenuesList"
import { useEffect } from "react"
import { useRevenues } from "../Providers/revenuesProvider"
import { getRevenues } from "../services/requests"

export function Home() {
  const { revenues, setRevenues } = useRevenues();
  useEffect(() => {
    getRevenues().then(res => {
      setRevenues(res.data);
    })
  }, [setRevenues])
  return (
    <>
      <Header />
      <Categories />
      <RevenuesList revenues={revenues} />
    </>
  )
}