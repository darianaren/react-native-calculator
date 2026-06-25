import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "÷",
}

export const useCalculator = () => {
  const lastOperation = useRef<Operator>();

  const [formula, setFormula] = useState("");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const buildNumber = (numberString: string) => {
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0")) {
      if (numberString !== "0" && !number.includes("."))
        return setNumber(numberString);

      if (numberString === "0" && !number.includes(".")) return;
    }

    setNumber(number + numberString);
  };

  useEffect(() => {
    setFormula(number);
  }, [number]);

  return {
    // Props
    formula,
    number,
    prevNumber,

    // Methods
    buildNumber,
  };
};
