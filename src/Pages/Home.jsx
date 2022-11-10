import { Header } from "../Components/Header/Header"
import { Categories } from "../Components/Categories"
import { RevenuesList } from "../Components/Main/RevenuesList"
import { useEffect } from "react"
import { useRevenues } from "../Providers/revenuesProvider"
import { getRevenues } from "../services/requests"

export function Home() {
  const { revenues, setRevenues, setLoading } = useRevenues();
  useEffect(() => {
    setLoading(true);
    getRevenues().then(res => {
      setRevenues(res.data);
      console.log(res.data)
    })
  }, [])
  return (
    <>
      <Header />
      <Categories />
      <RevenuesList revenues={revenues} />
    </>
  )
}