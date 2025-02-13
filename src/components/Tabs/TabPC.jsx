import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import useFetchData from '../../hooks/useFetchData';
import TableComponent from '../TableParams/TableParams';
import styles from './TabPC.module.scss';
import { Navigation, Pagination } from 'swiper/modules';

const TabPC = ({ url, title }) => {
  const { loading, data } = useFetchData(url);

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
                modules={[Pagination, Navigation]}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  nextEl: `.${styles['swiper-button-next']}`,
                  prevEl: `.${styles['swiper-button-prev']}`,
                }}
                className={styles['tab-swiper__slider']}
                slidesPerView={1}
                spaceBetween={30}
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
                <div className={styles['tab-swiper__navigation']}>
                  <div className={`${styles['swiper-button-prev']} swiper-button-prev`}></div>
                  <div className={`${styles['swiper-button-next']} swiper-button-next`}></div>
                </div>
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TabPC;
