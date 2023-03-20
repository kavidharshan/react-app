import data from "./EMPDATA.json"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const navigate = useNavigate()
  const getEmpid = localStorage.getItem("empiddata");

  const handelclick=()=>{
    navigate("/personaldata")
  }
  
  return (
    <div>
      <h1>Welcome {data[Number(getEmpid)].Name} !!!</h1>
      <h4>you are loged in</h4>
      <br></br>
      <table>
        <tr>
          <th>Designation</th>
          <th>Date of join</th>
          <th>Experience</th>
          <th>Project name</th>
          <th>Project location</th>
          <th>Project starting date</th>  
        </tr>
        <tr>
          <td>{data[Number(getEmpid)].Designation}</td>
          <td>{data[Number(getEmpid)].DOJ}</td>
          <td>{data[Number(getEmpid)].Current_Experience}</td>
          <td>{data[Number(getEmpid)].Current_Project}</td>
          <td>{data[Number(getEmpid)].Location}</td>
          <td>{data[Number(getEmpid)].Starting_date}</td>
        </tr>
      </table>
      <br></br>
      <button className="but-all-gb" onClick={handelclick}>
        Presonal details
      </button>
      <button className="but-all-bb" onClick={logout}>
        Logout
      </button>
    </div>
   ) 
};

export default Home;
