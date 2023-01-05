import React, { useEffect, useState } from "react";
import styled from "styled-components";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const NewsView = () => {
  const [newsData, setNewsData] = useState([]);
  const [page, setPage] = useState(1);
  let newsURL = `http://127.0.0.1:8000/news?page=${page}&count=5`;
  const getDataApi = async (_url: string) => {
    await fetch(_url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.items);
        setNewsData(json.items);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getDataApi(newsURL);
  }, [page]);

  console.log("뉴스 데이터", newsData);

  return (
    <NewsArea>
      <h2>
        <b>오늘의 뉴스</b> 를 확인해보세요
      </h2>
      {newsData.length != 0 ? (
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            360: {
              slidesPerView: 1.5,
              slidesPerGroup: 1,
            },
            410: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          {newsData.map((item: any, i: number) => (
            <SwiperSlide key={i}>
              <NewsBox>
                <a href={item.url} target="_blank">
                  <img src={item.image} />
                  <div>
                    <span className="news-press">{item.press}</span>
                    <h3 className="news-title">{item.title}</h3>
                    <span className="news-date">{item.date.split(" ")[0]}</span>
                  </div>
                </a>
              </NewsBox>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        "존재하는 기사가 없습니다."
      )}
      <button onClick={() => setPage((current) => current + 1)}>
        다른 기사 보기
      </button>
    </NewsArea>
  );
};
const NewsArea = styled.div`
  font-size: 1rem;
  .swiper-button-next {
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    &::after {
      font-size: 1.8rem !important;
      text-shadow: 2px 2px 2px #000;
    }
  }
  h2 {
    position: relative;
    margin-bottom: 5%;
    font-weight: bold;
    b {
      color: #205cff;
    }
  }
  button {
    position: relative;
    display: block;
    margin: 0 auto;
    margin-top: 5%;
    font-weight: 400;
    padding: 10px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;
const NewsBox = styled.article`
  position: relative;
  width: 100%;
  font-size: 0.9rem;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  a {
    position: relative;
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    img {
      position: relative;
      width: 100%;
      height: 55%;
      object-fit: cover;
    }
    > div {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 5%;
      flex-grow: 1;

      .news-press {
        display: block;
        color: #888;
        font-size: 0.7rem;
        margin-bottom: 4px;
      }
      .news-title {
        display: block;
        word-break: keep-all;
        font-weight: bold;
        flex-grow: 1;
      }
      .news-date {
        color: #888;
        font-size: 0.6rem;
        align-self: flex-end;
        margin-right: 10px;
      }
    }
  }
`;
export default NewsView;
