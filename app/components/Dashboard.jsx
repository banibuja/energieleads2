import React from 'react'

function Dashboard() {
  return (
    <div className="dashboard">

    <div className="dashboard-row">
        <div className="dashboard-section">
            <h2>Verkaufte Leads  <span className='percentage'>+84%</span></h2>
            <p>500,000+</p>
        </div>
        <div className="dashboard-section">
            <h2>Verkaufte Anlagen <span className='percentage'>+84%</span></h2>
            <p>2,439</p>
        </div>
        <div className="dashboard-section">
            <h2>Generierter Umsatz  <span className='percentage'>+84%</span></h2>
            <p>50.000.000€</p>
        </div>
    </div>


    <div className="dashboard-row">
        <div className="dashboard-section2">
            <h2>Alle leads</h2>
            <p>281</p>
            <button className="test-button2">Importieren</button>
            <hr />
            <h2>Generierter Umsatz  <span className='percentage'>92%</span></h2>
            <p>1.12M</p>
            <hr />
            <h2>Leadkosten <span className='percentage'>92%</span></h2>
            <p>13.769$</p>
        </div>
        <div className="diagram">
            <div className="diagram-img">
                <p className="revenue-overview"> Revenue&nbsp;Overview</p>

                <div className="diagram-line">
                    <img src="images/diagrame.png" alt="vdiagramphoto" />
                </div>
                <span className="time-periods">
                    <p>Day</p>
                    <p>Weekly</p>
                    <p>Monthly</p>
                    <p>Yearly</p>
                </span>

            </div>

            <div className="diagram-number">
                <p>6,000</p>
                <p>5,000</p>
                <p>4,000</p>
                <p>3,000</p>
                <p>2,000</p>
                <p>1,000</p>
            </div>

        </div>

        <div className="dashboard-section2">
            <h2>Vertiebesten Markus</h2>
            <div className="w3-half"></div>
            <div className="w3-full"></div>
            <h2>Vertriebler: Markus S.</h2>
            <div className="w3-half"></div>
            <div className="w3-full"></div>
            <h2>Closingrate Team: 22%</h2>
            <div className="w3-half"></div>
            <div className="w3-full"></div>
            <h2>Closingrate Markus: 29%</h2>
            <div className="w3-half"></div>
            <div className="w3-full"></div>
        </div>
    </div>

</div>
  )
}

export default Dashboard
