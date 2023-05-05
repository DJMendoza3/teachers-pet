import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setWidth, setHeight } from "../redux/slices/windowSlice";

export const useWindowSize = () => {
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      const handleResize = () => {
        dispatch(setWidth(window.innerWidth));
        dispatch(setHeight(window.innerHeight));
      };
  
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, [dispatch]);
  };