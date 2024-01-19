import React from "react";
import dayjs from "dayjs";
import axios from "axios";
import style from "./Home.module.scss";
import { Picture } from "../../types";
import { PictureBlock } from "../../components/PictureBlock";

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
      api_key: "DEMO_KEY",
    };
    const { data } = await axios.get(endpoint, {
      params: query,
    });

    setData(data);
  }, []);

  React.useEffect(() => {
    getDate();
    getPictureToday().catch(console.error);
  }, [getPictureToday]);

  return (
    <div className="container">
      <div className={style.content}>
        <h1 className={style.title}>Astronomy Picture of the Day</h1>
        <h3 className={style.currentDate}>{currentDate}</h3>
        <PictureBlock data={data} />
      </div>
    </div>
  );
};
