import { FaUserAlt, Fa500Px } from "react-icons/fa";


const Side = () => {
  return (
    <div className="container-fluid side">
      <div className="row">
         <div className="col-auto min-vh-100 bg-light ">
            <ul>
              <il>
                <a className="nav-link px-2 mb-3">
                   <Fa500Px />
                   <span className="ms-1 mb-2 d-none d-sm-inline">Acceuil</span>
                </a>
              </il>
              <il>
                <a className="nav-link px-2 mb-3">
                <FaUserAlt />
                  <span className="ms-1  d-none d-sm-inline">Users</span> 
                </a>
              </il>
              <il>
                <a className="nav-link px-2 mb-3">
                   <FaUserAlt />   
                   <span className="ms-1 d-none d-sm-inline">Admin</span> 
                </a>
              </il>
              <il>
                <a className="nav-link px-2 mb-3">
                   <Fa500Px />
                   <span className="ms-1 mb-2 d-none d-sm-inline">Contact</span>
                </a>
              </il>
              <il>
                <a className="nav-link px-2 mb-3">
                <FaUserAlt />
                  <span className="ms-1  d-none d-sm-inline">Setting</span> 
                </a>
              </il>
              <il>
                <a className="nav-link px-2 mb-3">
                   <Fa500Px />
                   <span className="ms-1 d-none d-sm-inline">Securite</span> 
                </a>
              </il>
            </ul>
         </div>
      </div>
    </div>
  )
}
export default Side;