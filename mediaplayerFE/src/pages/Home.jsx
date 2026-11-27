
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            {/* first section */}
            <div className='container d-flex align-items-center mt-5 justify-content-between'>

                <Add />
                <Link style={{ textDecoration: 'none' }} to={'/watch'}>
                    <span className='fs-5 fw-bold textStyle'> WATCH HISTORY <i className="fa-solid fa-clock ms-2"></i></span>
                </Link>

            </div>
            
            {/* second section */}
            <div className='container-fluid mt-5 w-100 mb-5'>
                <div className='row'>

                    <div className='col-md-9 textStyle'>
                        <View />
                    </div>

                    <div className='col-md-3 textStyle'>
                        <Category />
                    </div>

                </div>
            </div>


        </>
    )
}

export default Home