import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const { van } = useOutletContext();
  return (
    <section>
      <h4>Name: {van.name}</h4>
      <h4>Description: {van.description}</h4>
      <span>Visiblity: Public</span>
    </section>
  );
}

export default HostVanInfo;
