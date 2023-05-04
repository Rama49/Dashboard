 import { FaAddressCard } from 'react-icons/fa';
 import graph from "../Components/image/graph.png";
 import cercle from "../Components/image/cercle.png";
 import troi from "../Components/image/troi.png";
 import male from "../Components/image/male.png";
 import femal from "../Components/image/femal.png";
 import fleche1 from "../Components/image/fleche1.png";
 import fleche2 from "../Components/image/fleche2.png";



const Dash = () => {
    return(
        <section className="offset-3 offset-lg-2 mt-5">
            <div className="row mb-3 d-flex justify-content-center">
                <div className="une col-lg-2 col-md-4 col-sm-6 col-xs-12 me-3 text-center mb-3">
                    < FaAddressCard />
                   <p>Closed Loans</p>
                   <h4>N5,028,480</h4>
                   <h6>Unit Number 520</h6>
                </div>
                <div className="deux col-lg-2 col-md-4 col-sm-6 col-xs-12 me-3 text-center mb-3">
                < FaAddressCard />
                <p>Closed Loans</p>
                   <h4>N5,028,480</h4>
                   <h6>Unit Number 520</h6>
                </div>
                <div className="trois col-lg-2 col-md-4 col-sm-6 col-xs-12 me-3 text-center mb-3">
                < FaAddressCard />
                <p>Closed Loans</p>
                   <h4>N5,028,480</h4>
                   <h6>Unit Number 520</h6>
                </div>
                <div className="quatre col-lg-2 col-md-4 col-sm-6 col-xs-12 me-3 text-center mb-3">
                < FaAddressCard />
                <p>Closed Loans</p>
                   <h4>N5,028,480</h4>
                   <h6>Unit Number 520</h6>
                </div>
                <div className="cinq col-lg-2 col-md-4 col-sm-6 col-xs-12 me-3 text-center mb-3">
                < FaAddressCard />
                <p>Closed Loans</p>
                   <h4>N5,028,480</h4>
                   <h6>Unit Number 520</h6>
                </div>
           </div>
           <div className="row mb-3 mx-4 mt-5">
                <div className="col-7 ">
                   < img src={graph} className='img-fluid' />
                </div>
                <div className="col-5">
                    <div className="row">
                        <div className="col-6">
                           <div className="cercle1 mb-5">
                                <div className="row">
                                    <div className="col-10">
                                    <h6>Actives Users</h6>
                                    </div>
                                    <div className="col-2 ">
                                        <img src={troi} className='img-fluid' />
                                    </div>
                                </div>
                                <p>10,786</p>
                           </div>
                           <div className="cercle1 mb-5">
                                <div className="row">
                                    <div className="col-10">
                                    <h6>Actives Users</h6>
                                    </div>
                                    <div className="col-2 ">
                                        <img src={troi} className='img-fluid' />
                                    </div>
                                </div>
                                <p>10,786</p>
                           </div>
                           <div className="cercle1 mb-5">
                                <div className="row">
                                    <div className="col-10">
                                    <h6>Actives Users</h6>
                                    </div>
                                    <div className="col-2 ">
                                        <img src={troi} className='img-fluid' />
                                    </div>
                                </div>
                                <p>10,786</p>
                           </div>
                        </div>
                        <div className="col-6">
                            <h6 className='mb-3'>Active Users Ratio</h6>
                            < img src={cercle} className='img-fluid' />
                            <div className="row">
                                <div className="col-1 ble">
                                <img src={male} />
                                </div>
                                <div className="col-3 ble">
                                   <p>Male</p>
                                </div>
                                <div className="col-7">6,472</div>                         
                            </div>
                            <div className="row">
                                <div className="col-1 ble">
                                <img src={femal} />
                                </div>
                                <div className="col-3 ble">
                                   <p>femal</p>
                                </div>
                                <div className="col-7">6,472</div>                         
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           <div className="bas ms-3">
           <div className="row">
              <div className="col-1">
                <img src={fleche1} className='img-fluid' />
              </div>
              <div className="col-2">
                <p>Monday</p>
              </div>
              <div className="col-1">
                <p>Godwin</p>
              </div>
              <div className="col-2">
                <p>N200.000</p>
              </div>
              <div className="col-2">
                <p>Mon,Feb 15 2023</p>
              </div>
              <div className="col-2">
                <p>00:45:20 AM</p>
              </div>
              <div className="col-1">
                <p>Disbursed</p>
              </div>
           </div>
           <div className="row">
              <div className="col-1">
                <img src={fleche2} className='img-fluid' />
              </div>
              <div className="col-2">
                <p>Tuesday</p>
              </div>
              <div className="col-1">
                <p>Godwin</p>
              </div>
              <div className="col-2">
                <p>N200.000</p>
              </div>
              <div className="col-2">
                <p>Tues,Feb 15 2023</p>
              </div>
              <div className="col-2">
                <p>00:45:20 AM</p>
              </div>
              <div className="col-1">
                <p>Disbursed</p>
              </div>
           </div>
           <div className="row">
              <div className="col-1">
                <img src={fleche2} className='img-fluid' />
              </div>
              <div className="col-2">
                <p>Tuesday</p>
              </div>
              <div className="col-1">
                <p>Godwin</p>
              </div>
              <div className="col-2">
                <p>N200.000</p>
              </div>
              <div className="col-2">
                <p>tues,Feb 15 2023</p>
              </div>
              <div className="col-2">
                <p>00:45:20 AM</p>
              </div>
              <div className="col-1">
                <p>Disbursed</p>
              </div>
           </div>
           <div className="row">
              <div className="col-1">
                <img src={fleche1} className='img-fluid' />
              </div>
              <div className="col-2">
                <p>Wednesday</p>
              </div>
              <div className="col-1">
                <p>Godwin</p>
              </div>
              <div className="col-2">
                <p>N200.000</p>
              </div>
              <div className="col-2">
                <p>Web,Feb 15 2023</p>
              </div>
              <div className="col-2">
                <p>00:45:20 AM</p>
              </div>
              <div className="col-1">
                <p>Disbursed</p>
              </div>
           </div>
           <div className="row">
              <div className="col-1">
                <img src={fleche2} className='img-fluid' />
              </div>
              <div className="col-2">
                <p>Thursday</p>
              </div>
              <div className="col-1">
                <p>Godwin</p>
              </div>
              <div className="col-2">
                <p>N200.000</p>
              </div>
              <div className="col-2">
                <p>Web,Feb 15 2023</p>
              </div>
              <div className="col-2">
                <p>00:45:20 AM</p>
              </div>
              <div className="col-1">
                <p>Disbursed</p>
              </div>
           </div>
           <div className="row">
              <div className="col-1">
                <img src={fleche1} className='img-fluid' />
              </div>
              <div className="col-2">
                <p>Sunday</p>
              </div>
              <div className="col-1">
                <p>Godwin</p>
              </div>
              <div className="col-2">
                <p>N200.000</p>
              </div>
              <div className="col-2">
                <p>Web,Feb 15 2023</p>
              </div>
              <div className="col-2">
                <p>00:45:20 AM</p>
              </div>
              <div className="col-1">
                <p>Disbursed</p>
              </div>
           </div>
           <div className="row">
              <div className="col-1">
                <img src={fleche1} className='img-fluid' />
              </div>
              <div className="col-2">
                <p>Sunday</p>
              </div>
              <div className="col-1">
                <p>Godwin</p>
              </div>
              <div className="col-2">
                <p>N200.000</p>
              </div>
              <div className="col-2">
                <p>Web,Feb 15 2023</p>
              </div>
              <div className="col-2">
                <p>00:45:20 AM</p>
              </div>
              <div className="col-1">
                <p>Disbursed</p>
              </div>
           </div>
           </div>
           
        </section>
    )
}

export default Dash;