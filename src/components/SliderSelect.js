import React, { Fragment } from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <>
      <SliderComponent
        label={"Home Value"}
        min={1000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={1000}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment:value*.2,
            loanAmount:value*.8,
            homeValue: value,
          })
        }
        unit="$"
        amount={data.homeValue}
      />
      <SliderComponent
        label={"Down Payment"}
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount:(data.homeValue-value),
            downPayment: value,
          })
        }
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponent
        label={"Loan Amount"}
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment:(data.homeValue-value),
            loanAmount: value,
          })
        }
        unit="$"
        amount={data.loanAmount}
      />
      <SliderComponent
        label={"Inerest Rate"}
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={1}
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        unit="%"
        amount={data.interestRate}
      />
    </>
  );
};

export default SliderSelect;
