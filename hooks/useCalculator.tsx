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

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString !== "0" && !number.includes("."))
        return setNumber(numberString);

      if (numberString === "0" && !number.includes(".")) return;
    }

    setNumber(number + numberString);
  };

  const clean = () => {
    setNumber("0");
    setPrevNumber("0");
    setFormula("0");

    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (!number.startsWith("-")) return setNumber((prev) => "-" + prev);

    setNumber((prev) => prev.slice(1));
  };

  const deleteLast = () => {
    if (number.length === 1) return setNumber("0");
    setNumber((prev) => prev.slice(0, -1));
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
    clean,
    toggleSign,
    deleteLast,
  };
};
