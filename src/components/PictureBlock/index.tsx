import React from "react";
import style from "./Picture.module.scss";
import { Picture } from "../../types";
import { Spin } from "antd";

interface IPictureBlockProps {
  data: Picture | null;
}

export const PictureBlock: React.FC<IPictureBlockProps> = ({ data }) => {
  return (
    <>
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
    </>
  );
};
