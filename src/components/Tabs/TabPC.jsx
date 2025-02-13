import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import useFetchData from '../../hooks/useFetchData';
import TableComponent from '../TableParams/TableParams';
import styles from './TabPC.module.scss';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef, useState } from 'react';
import BtnDefault from '../BtnDefault/BtnDefault';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TabPC = ({ url, title }) => {
  const { loading, data } = useFetchData(url);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = data ? 5 : 0;

  const [count, setCount] = useState(10);
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <div className={styles['tab-pc']}>
      {loading ? (
        <div className={styles['spinnerContainer']}>
          <div className={styles['spinner']}></div>
        </div>
      ) : (
        <>
          <h2 className={`${styles['tab-pc__content-title']} title-reset`}>{title}</h2>

          <div className={styles['tab-swiper']}>
            <div className={styles['tab-swiper__box']}>
              <Swiper
                ref={swiperRef}
                modules={[Pagination, Navigation]}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                className="tab-swiper__slider"
                slidesPerView={1}
                spaceBetween={30}
                onSlideChange={handleSlideChange}
              >
                <SwiperSlide className={styles['tab-swiper__slider-slide']}>
                  <TableComponent title="Температуры" data={data?.temperatures} />
                </SwiperSlide>
                <SwiperSlide className={styles['tab-swiper__slider-slide']}>
                  <TableComponent title="Давления" data={data?.pressures} />
                </SwiperSlide>
                <SwiperSlide className={styles['tab-swiper__slider-slide']}>
                  <TableComponent title="Разрежения" data={data?.vacuums} />
                </SwiperSlide>
                <SwiperSlide className={styles['tab-swiper__slider-slide']}>
                  <TableComponent title="ИМ" data={data?.im} />
                </SwiperSlide>
                <SwiperSlide className={styles['tab-swiper__slider-slide']}>
                  <TableComponent title="Горелка" data={data?.gorelka} />
                </SwiperSlide>
              </Swiper>
              <div className={styles['tab-swiper__navigation']}>
                <BtnDefault
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                  icon={<FaChevronLeft />}
                  borderRadius={'50%'}
                  iconSize="20px"
                  disabled={currentIndex === 0}
                ></BtnDefault>
                <BtnDefault
                  onClick={() => swiperRef.current.swiper.slideNext()}
                  icon={<FaChevronRight />}
                  borderRadius={'50%'}
                  iconSize="20px"
                  disabled={currentIndex === totalSlides - 1}
                ></BtnDefault>
              </div>
            </div>
          </div>

          {/* useRef */}
          <input ref={inputEl} type="text" />
          <button onClick={onButtonClick}>Установить фокус на поле ввода</button>

          {/* useState */}
          <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TabPC;
