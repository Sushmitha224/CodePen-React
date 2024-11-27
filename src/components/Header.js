import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faGear } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
        <div className="top-header-wrap top-align-items">
            <div className="top-align-items">
                <img src="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico"/>
                <h1>CodePen</h1>
            </div>

            <div className="top-header-buttons top-align-items">
                <button>
                    <FontAwesomeIcon icon={faCloud} className='top-header-icon'/>
                    Save
                </button>
                <button>
                    <FontAwesomeIcon icon={faGear} className='top-header-icon'/>
                    Setting
                </button>
                <button className='sign-up-button'>Sign Up</button>
                <button>Log In</button>
            </div>
        </div>
    )
}

export default Header;