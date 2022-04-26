import React, {useEffect,useState} from 'react'
import "./PageBody.css"
import RightCard from './CompBody/RightCard/RightCard'
import SingleImage from "./CompBody/SingleImage/SingleImage"
import LoadCard from './CompBody/BranchCards/LoadCard'
import Data from "../Body/CompBody/Data/data.js";
const PageBody = () => {

    const [mainPageData, setmainPageData] = useState({});
  useEffect(() => {
    setmainPageData(Data);
  }, []);

//   {console.log(mainPageData.Branches)}
  return (

        <section>
        <div className='mainBody'>
        <div className='leftDiv'>
            <SingleImage></SingleImage>
            <div className='branchCards'>
                <LoadCard data ={mainPageData.Branches}/>
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

export default PageBody