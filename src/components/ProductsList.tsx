import { useGetProducts } from "@/hooks/useGetProducts";


export default function ProductsList() {
  const { data } = useGetProducts();
  console.log(data);
  return (
    <div>
      
    </div>
  )
}
