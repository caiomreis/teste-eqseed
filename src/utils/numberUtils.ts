export const toMoney = (
  value?: number,
  symbol = true,
  options: Intl.NumberFormatOptions = {}
): string => {
  const isTheValueIsInCents = value && value < 1 && Math.sign(value) === 1;
  if (value && isTheValueIsInCents && symbol) {
    return toMoneyIfValueIsCent(value);
  }

  // Needed because Intl returns extraneous currency symbol
  const getCurrencySymbol = () => {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
      .format(value ?? 0)
      .replace(/\d+/g, "")
      .trim()
      .replace(/[&/\\#,+()~%.'":*?<>{}]/g, "");
  };

  const result = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    ...options,
  }).format(value ?? 0);

  const sign = (value || 0) < 0 ? "-" : "";
  if (!symbol) return `${sign}${result.replace(getCurrencySymbol(), "")}`;

  return result;
};

export const toMoneyIfValueIsCent = (value: number) => {
  let result = formattedNumber(value, {
    maximumSignificantDigits: 3,
    currency: "BRL",
    style: "currency",
  });

  const resultArray = result.split(",");

  const hasDecimalPoints = resultArray.length >= 2;
  let numbersAfterDecimalPoints = 0;

  if (hasDecimalPoints) {
    numbersAfterDecimalPoints = resultArray[1].length;
  }

  if (numbersAfterDecimalPoints === 1) {
    result = formattedNumber(value, {
      currency: "BRL",
      style: "currency",
    });
  }

  const isBiggerOrEqualThanThree = numbersAfterDecimalPoints >= 3;

  return isBiggerOrEqualThanThree ? result.replace(/.$/, "") : result;
};

export const formattedNumber = (value?: number, options: Intl.NumberFormatOptions = {}) =>
  Intl.NumberFormat("pt-BR", {
    ...options,
  }).format(value ?? 0);

export const toPercent = (value?: number, total = 100): string => {
  const percentage = (value ?? 0) / total;
  return Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2,
  }).format(percentage);
};
export const onlyNumbers = (value?: string): string => value?.replace(/\D/g, "") ?? (value as any);

export const unmaskMoney = (value: string): number => {
  let v = value;
  if (!v) {
    return value as any;
  }
  v = v.split(".").join("");
  v = v.split(",").join(".");
  return parseFloat(v.replace(/\D/g, "")) / 100;
};

export const toNumber = (value: string): number => {
  const num = value.replace(".", "").replace(",", ".");
  return parseFloat(num);
};

export const toFloat = (value?: string): number => {
  if (!value) {
    return value as any;
  }
  value = value.replace(/[^\d]+/g, "");
  for (let i = 0; i < 3; i++) {
    if (value.length < 3) {
      value = `0${value}`;
    }
  }
  return parseFloat(
    `${value.substring(0, value.length - 2)}.${value.substring(value.length, value.length - 2)}`
  );
};

export const truncateNumber = (value: number, places = 2) =>
  Math.trunc(value * Math.pow(10, places)) / Math.pow(10, places);

export const ceilDecimals = (value: number, places: number) => {
  const power = Math.pow(10, places);
  return Math.ceil(truncateNumber(value, places + 1) * power) / power;
};

export const isNegative = (value: number) => {
  if (Math.sign(value) === -1) {
    return true;
  }

  return false;
};
export const isNumber = (value?: any | null) => !isNaN(value) && value !== null;

export const accountFormated = (account: number) => {
  const accountWithoutDigit = Math.floor(account / 10);
  const digit = account % 10;
  const accoutFormated = `${accountWithoutDigit}-${digit}`;

  return accoutFormated;
};
