import { useOutletContext } from "react-router-dom"

function HostVanPricing() {
    const {van} = useOutletContext();

  return (
    <section>
   <h4>{van.price}</h4>
    </section>
  )
}

export default HostVanPricing