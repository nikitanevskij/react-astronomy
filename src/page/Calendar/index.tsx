import React from "react";

import { DatePicker, Spin } from "antd";
import style from "./Calendar.module.scss";
import axios from "axios";
import { Picture } from "../../types";
import { PictureBlock } from "../../components/PictureBlock";

export const Calendar = () => {
  const { RangePicker } = DatePicker;
  const [dateRange, setDateRange] = React.useState([]);
  const [dataList, setDataList] = React.useState<Picture[] | []>([]);
  const [selectPicture, setSelectPicture] = React.useState<Picture | null>(null);

  const onChange = (_: any, dates: any) => {
    setDateRange(dates);
  };

  const getPictures = React.useCallback(async () => {
    setSelectPicture(null);
    const endpoint = "https://api.nasa.gov/planetary/apod";
    const query = {
      start_date: dateRange[0],
      end_date: dateRange[1],
      api_key: "DEMO_KEY",
    };
    const { data } = await axios.get<Picture[]>(endpoint, {
      params: query,
    });

    setDataList(data);
  }, [dateRange]);

  const getSelectPicture = async (selectDate: string) => {
    const endpoint = "https://api.nasa.gov/planetary/apod";
    const query = {
      date: selectDate,
      api_key: "DEMO_KEY",
    };
    const { data } = await axios.get<Picture>(endpoint, {
      params: query,
    });

    setSelectPicture(data);
  };

  React.useEffect(() => {
    if (dateRange.length === 0) {
      return;
    }

    getPictures().catch(console.error);
  }, [getPictures, dateRange]);
  console.log(dataList);
  return (
    <div className="container">
      <div className={style.content}>
        <h2 className={style.text}> Выберите диапазон для поиска изоображений</h2>
        <div className={style.rangePicker}>
          <RangePicker onChange={onChange} />
        </div>
        {dataList.length !== 0 ? (
          dataList.map((item) => (
            <div key={item.date} className={style.line}>
              <div className={style.date}>{item.date}</div>
              <p className={style.description} onClick={() => getSelectPicture(item.date)}>
                {item.title}
              </p>
            </div>
          ))
        ) : (
          <div className={style.spin}>
            <Spin size="large" />
          </div>
        )}

        {selectPicture && <PictureBlock data={selectPicture} />}
      </div>
    </div>
  );
};
