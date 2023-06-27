import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getByCriteria } from "../redux/weather/action";

function Weather() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getByCriteria());
  }, []);
  return <div>weather</div>;
}

export default Weather;
