import React, { useState } from "react";
import { Image } from "antd";

const images = [
  "https://img2.baidu.com/it/u=3785713124,4063866265&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
  "https://img1.baidu.com/it/u=3055990288,2753579002&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
  "https://img1.baidu.com/it/u=3005028884,1678352527&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
];

export type TDemoComponentProps = {};

export const Demo: React.FunctionComponent<TDemoComponentProps> = () => {
  const [selectedImg, setSelecteImg] = useState("1");

  return (
    <div>
      12341234
      {/* {images.map((item) => (
        <Image key={item} width={400} height={280} src={item} />
      ))} */}
    </div>
  );
};
