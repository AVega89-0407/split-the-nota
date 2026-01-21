import { useLocation, useNavigate } from "react-router-dom"

function Results() {
const { state } = useLocation();
const navigate = useNavigate();

  return (
    <>
    <h2>Varje person ska betala</h2>

    <p>{state?.perPerson?.toFixed(2)} kr</p>

    <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}

export default Results