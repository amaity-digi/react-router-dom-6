import { useOutletContext } from "react-router-dom"

function HostVanPhotos() {
    const {van} = useOutletContext();

  return (
    <section>
    <img src={van.url}/>
    </section>
  )
}

export default HostVanPhotos