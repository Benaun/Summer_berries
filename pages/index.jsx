import { About } from "@/components/about/about";
import Geoposition from "@/components/geoposition";
import Info from "@/components/info";
import ItemsList from "@/components/products/itemsList";
import DefaultLayout from "@/layout/default";

export default function Home() {
  return (
    <DefaultLayout>
      <Info />
      <ItemsList />
      <About />
      <Geoposition />
    </DefaultLayout>
  )
}
