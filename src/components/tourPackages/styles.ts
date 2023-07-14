import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .card {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 210px;
    width: 500px;
    background: transparent;
    border-radius: 15px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }

  .card .imageBox {
    position: relative;
    width: 400px;
    height: 100%;
    overflow: hidden;
    background-position: center;
    border-radius: 15px 0 0 0;
    background: transparent;

    img {
      width: 220px;
      height: 220px;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .swiper {
      max-width: 100%;
      max-height: 100%;
    }

    /* thumbs */
    .mySwiper {
      height: 100%;
      min-height: 100px;
      box-sizing: border-box;
      padding: 0;
    }

    .mySwiper .swiper-slide {
      width: 100%;
      height: 100%;
      opacity: 1;
    }

    .swiper-button-prev {
      color: #fff;
      opacity: 0.7;
    }
    .swiper-button-next {
      color: #fff;
      opacity: 0.7;
    }
    .swiper-button-prev:hover {
      transition: 0.5s;
    }
  }

  .allContent {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: auto;
    margin-left: 0px;
    padding: 12px;
    background-color: #fff;
  }

  .allContent .description {
    overflow: hidden;
    font-size: 13px;
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .allContent .label {
    color: #666;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .allContent .title {
    color: #444;
    font-size: 18px;
    font-weight: 700;
  }

  .pricing {
    display: flex;
    flex-direction: row;
    color: #3f95fa;
    font-size: 14px;
    font-weight: 700;
    margin-top: 20px;
    position: absolute;
    bottom: 20px;
    right: 140px;
  }

  .seeMore {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 10px;
    right: 0;
    background-color: #3f95fa;
    color: #fff;
    padding: 8px 12px;
    border-radius: 15px 0 2px 15px;
    font-size: 16px;
    font-weight: 700;
  }

  .seeMore:hover {
    color: #3f95fa;
    background-color: #fff;
    border: 1px solid #3f95fa;
    border-right: none;
    cursor: pointer;
  }
`;
