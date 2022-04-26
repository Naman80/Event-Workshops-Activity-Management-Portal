import React, {useEffect,useState} from 'react'
import "../../../Body/PageBody.css"
import RightCard from '../RightCard/RightCard'
// import RightCard from '../CompBody/RightCard/RightCard'
import SingleImage from "../SingleImage/SingleImage"
import LoadCard from '../BranchCards/LoadCard'
import Data from "../../CompBody/Data/data.js"
import LoadEventCard from './LoadEventCard'
const EventPage = ({name}) => {
    console.log(name);
    // console.log(pass);
    const [mainPageData, setmainPageData] = useState({});
  useEffect(() => {
    setmainPageData(Data);
  }, []);
  return (

        <section>
        <div className='mainBody'>
        <div className='leftDiv'>
            <SingleImage></SingleImage>
            <div className='branchCards'>
                <LoadEventCard data = {mainPageData.CSE}></LoadEventCard>
            </div>
        </div>
        <div className='rightDiv'>
            
            <RightCard title = "Contact Us" 
            info = "Email - alumni@mait.ac.in"></RightCard>

            <RightCard title = "Contact Us"
             info = "Email - alumni@mait.ac.in"></RightCard>

            <RightCard title = "Contact Us" 
            info = "Email - alumni@mait.ac.in"></RightCard>
            
            <RightCard title = "Contact Us"
             info = "Email - alumni@mait.ac.in"></RightCard>
            
        </div>
        </div>
        </section>
    )
}

export default EventPage