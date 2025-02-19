import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import useFetchData from '../../hooks/useFetchData';
import TableComponent from '../TableParams/TableParams';
import styles from './TabPC.module.scss';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BtnDefault from '../BtnDefault/BtnDefault';

interface TabPCProps {
  url: string;
  title: string;
}

const TabPC: React.FC<TabPCProps> = ({ url, title }) => {
  const { loading, data } = useFetchData(url);
  const swiperRef = useRef<any>(null); // Use 'any' or a more specific type if you have one
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSlides = data ? 5 : 0;

  const handleSlideChange = (swiper: any) => {
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
                />
                <BtnDefault
                  onClick={() => swiperRef.current.swiper.slideNext()}
                  icon={<FaChevronRight />}
                  borderRadius={'50%'}
                  iconSize="20px"
                  disabled={currentIndex === totalSlides - 1}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TabPC;
