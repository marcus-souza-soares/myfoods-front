import { useRevenues } from "../Providers/revenuesProvider";
import { Header } from "../Components/Header/Header";
import { Categories } from "../Components/Categories";
import { RevenuesList } from "../Components/Main/RevenuesList";

export function RevenueByCategory() {
  const { revenues, setRevenues } = useRevenues();
  return (
    <>
      <Header />
      <Categories />
      <RevenuesList
        revenues={revenues}
        setRevenues={setRevenues}
      />
    </>

  )
}