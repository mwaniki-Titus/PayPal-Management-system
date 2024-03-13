import './Dashboard.scss';
import ReportsContent from './ReportsContent';



const Dashboard = () => {
    return (
        <>
        <div className='TopDashboard'>
            <div className='allReports'>
                <div className='totalNumber'>
                    <h1>Total Employees</h1>
                </div>
                <div className='total percentage'>
                    <h1>Percentage</h1>
                </div>
                <div className='ontime'>On time</div>
                <div className='late'>late today</div>
             </div>  
             </div>
             <div>
                <ReportsContent/>
             </div>
       
       </>
    )
}

export default Dashboard;