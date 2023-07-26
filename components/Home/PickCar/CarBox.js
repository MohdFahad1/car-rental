import Image from "next/image";
import styles from './common.module.css';

function CarBox({ data, carID }) {
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className={styles.box_cars}>
          {/* car */}
          <div className="pick-car">
            <Image
              style={{ display:"block" }}
              src={car.img}
              alt="car_img"
              className={styles.car_images}
            />
          </div>
          {/* description */}
          <div className={styles.pick_desc}>
            <div className={styles.pick_price_desc}>
              <span>${car.price}</span> / rent per day
            </div>
            <div className={styles.pick_desc_table}>
              <div className={styles.pick_description__table__col}>
                <span>Model</span>
                <span>|</span>
                <span>{car.model}</span>
              </div>

              <div className={styles.pick_description__table__col}>
                <span>Mark</span>
                <span>|</span>
                <span>{car.mark}</span>
              </div>

              <div className={styles.pick_description__table__col}>
                <span>Year</span>
                <span>|</span>
                <span>{car.year}</span>
              </div>

              <div className={styles.pick_description__table__col}>
                <span>Doors</span>
                <span>|</span>
                <span>{car.doors}</span>
              </div>

              <div className={styles.pick_description__table__col}>
                <span>AC</span>
                <span>|</span>
                <span>{car.air}</span>
              </div>

              <div className={styles.pick_description__table__col}>
                <span>Transmission</span>
                <span>|</span>
                <span>{car.transmission}</span>
              </div>

              <div className={styles.pick_description__table__col}>
                <span>Fuel </span>
                <span> |</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <button className={styles.reserve_btn}>
              Reserve Now
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;