import { useState, useEffect } from "react";

interface GeneratorSettingsProps {
  min: number;
  max: number;
  steps: number;
  color: string;
  id: string;
  label: string;
  description: string;
}

export default function GeneratorSettings({
  min = 0,
  max = 100,
  steps,
  color,
  id,
  label,
  description,
}: GeneratorSettingsProps) {
  const [value, setValue] = useState(min);

  useEffect(() => {
    const slider = document.querySelector(`#slider-${id}`) as HTMLElement;
    const sliderThumb = document.querySelector(`#slider-thumb-${id}`) as HTMLElement;
    const sliderController = document.querySelector(`#slider-controller-${id}`) as HTMLElement;
    const stepList: number[] = [];
    let sliderWidth = 0;
    let stepDistance = 0;
    let sliderLeft = 0;
    let sliderRight = 0;
    let mousePosition = 0;
    let closestStep = 0;

    if (sliderController && sliderThumb && slider) {
      sliderController.addEventListener("dragstart", (e) => {
        sliderWidth = slider.offsetWidth;
        stepDistance = sliderWidth / steps;
        sliderLeft = slider.getBoundingClientRect().left;
        sliderRight = slider.getBoundingClientRect().right;

        for (let i = 0; i < steps; i++) {
          stepList.push(sliderLeft + stepDistance * i);
        }
        stepList.push(sliderRight);
      });
      // event listener that tracks mouse positionX when sliderThumb is clicked and dragged across slider
      sliderController.addEventListener("drag", (e) => {
        mousePosition = e.clientX;
        //compare mousePosition to stepList and set sliderThumb left position to closest step
        for (let i = 0; i < stepList.length; i++) {
          if (
            Math.abs(mousePosition - stepList[i]) <
            Math.abs(mousePosition - closestStep)
          ) {
            if (mousePosition !== 0) {
              setValue(Math.round(min + ((max - min) / steps) * i));
              closestStep = stepList[i];
            }
          }
        }
        sliderThumb.style.left = `${closestStep - sliderLeft}px`;
        sliderController.style.left = `${closestStep - sliderLeft}px`;
      });
      sliderController.addEventListener("dragend", (e) => {
        sliderThumb.style.left = `${closestStep - sliderLeft}px`;
        sliderController.style.left = `${closestStep - sliderLeft}px`;
      });
    }
  }, []);

  return (
    <>
      <div>
        <p>{label}</p>
        <div>{value}</div>
      </div>
      <p style={{ color: "#AAA" }}>{description}</p>
      <div
        id={`slider-${id}`}
        style={{
          position: "relative",
          width: "80%",
          height: "20px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div id="test-id" />
        <div id={`slider-thumb-${id}`} />
        <div
          id={`slider-controller-${id}`}
          draggable="true"
          style={{ opacity: "0" }}
        />
      </div>
    </>
  );
}
