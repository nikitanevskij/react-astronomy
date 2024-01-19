import React from "react";
import dayjs from "dayjs";
import axios from "axios";
import style from "./Home.module.scss";
import { Spin } from "antd";

interface Picture {
  data: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export const Home: React.FC = () => {
  const [currentDate, setCurrentDate] = React.useState("");
  const [data, setData] = React.useState<Picture | null>(null);

  const getDate = () => {
    const getDay = dayjs().format("YYYY-MM-DD");
    setCurrentDate(getDay);
  };

  const getPictureToday = React.useCallback(async () => {
    const endpoint = "https://api.nasa.gov/planetary/apod";
    const query = {
      date: currentDate,
      api_key: "DEMO_KEY",
    };
    const { data } = await axios.get(endpoint, {
      params: query,
    });

    setData(data);
  }, [currentDate]);

  React.useEffect(() => {
    getDate();
    getPictureToday().catch(console.error);
  }, [getPictureToday]);
  console.log(data);
  return (
    <>
      <div className="container">
        <div className={style.content}>
          <h1 className={style.title}>Astronomy Picture of the Day</h1>
          <h3 className={style.currentDate}>{currentDate}</h3>
          {data ? (
            <>
              <div className={style.image}>
                <img src={data.url} alt={data.title} />
              </div>

              <h4 className={style.imageTitle}> {data.title}</h4>
              <p className={style.explanation}>
                <span>Explanation: </span>
                {data.explanation}
              </p>
            </>
          ) : (
            <div className={style.spin}>
              <Spin size="large" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
