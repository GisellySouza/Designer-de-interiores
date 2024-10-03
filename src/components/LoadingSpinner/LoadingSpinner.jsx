import './LoadingSpinner.css'
import LoadingSpinnerGif from "../../assets/LoadingSpinner.gif"



function LoadingSpinner() {
    return (
        
        <div className="d-flex jc-center al-center loading-overlay-container"> 
            <img src={LoadingSpinnerGif} alt="Loading" height='120px' />
        </div>
          
        
    )

}

export default LoadingSpinner