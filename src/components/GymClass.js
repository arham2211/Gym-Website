import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function GymClass() {
    return (
        <div className="container gym-class mb-5">
            <div className="row px-3">
                <div className="col-md-6 p-0">
                    <div id="box-1" className="gym-class-box d-flex flex-column align-items-end justify-content-center text-right text-white px-5">
                        <i className="flaticon-six-pack"></i>
                        <h3 className="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                        <p>
                            Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                            sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                        </p>
                        <Link to="/home" className="btn btn-lg btn-outline-light mt-4 px-4 rounded-0">Join Now</Link>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div id="box-2" className="gym-class-box d-flex flex-column align-items-start justify-content-center text-left text-white px-5">
                        <i className="flaticon-bodybuilding"></i>
                        <h3 className="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                        <p>
                            Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                            sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                        </p>
                        <Link to="/home" className="btn btn-lg btn-outline-light mt-4 px-4 rounded-0">Join Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
