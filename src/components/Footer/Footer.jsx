import Button from '../../common/Button/Button';
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
            <Button disabled="true" className="btnOrder btnOrder-disabled">Order later between {openHour} and {closeHour}</Button>
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
        <Button className={"btnOrder"}>Order</Button>
        {/*<button className="btnOrder">Order</button>*/}
      </div>
    </>
  )
}