import './Footer.css'
export default function Footer(){
  const hour = new Date().getHours();
  const openHour= 8;
  const closeHour=20;
  const isOpen =  hour >=openHour && hour <=closeHour ;
  return (<>
        <footer className="footer">
      {
        isOpen ? (
          <Order closeHour={closeHour} openHour={openHour}></Order>
        ) : (
          <div className="order">
            <p>
              We're closed until {openHour}:00. Come visit us later.
            </p>
            <button disabled="true" className="btn btn-disabled">Order later between {openHour} and {closeHour}</button>
          </div>
        )
      }
    </footer>
  </>)
}

function Order({closeHour,openHour}){
  return (
    <>
      <div className="order">
        <p>
          We're open from {openHour}:00  to {closeHour}:00. Come visit us or order online.
        </p>
        <button className="btn">Order</button>
      </div>
    </>
  )
}