import React from "react";
import { DatePicker, type DatePickerProps } from "antd";
import axios from "axios";
import { PictureBlock } from "../../components/PictureBlock";
import { Picture } from "../../types";
import style from "./ChoiceDate.module.scss";
import dayjs from "dayjs";

export const ChoiceDate: React.FC = () => {
  const [currentDate, setCurrentDate] = React.useState("");

  const [data, setData] = React.useState<Picture | null>(null);

  const onChange: DatePickerProps["onChange"] = (_, dateString) => {
    setData(null);
    setCurrentDate(dateString);
  };

  const getPicture = React.useCallback(async () => {
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
    getPicture().catch(console.error);
  }, [getPicture]);

  return (
    <div className="container">
      <div className={style.content}>
        <h2 className={style.text}>Выберите дату для поиска изоображения</h2>
        <div className={style.datePicker}>
          <DatePicker onChange={onChange} defaultValue={dayjs()} />
        </div>
        <PictureBlock data={data} />
      </div>
    </div>
  );
};
