const fixNumber = (number: string) =>
  number.replaceAll("+", "").replaceAll("-", "").replaceAll(" ", "");

const handleWindow = (url: string) => {
  window.open(url, "_blank");
};

export const callNumber = (number: string) => {
  handleWindow(`tel:${number}`);
};

export const sendWhatsAppMessage = (number: string) => {
  const fixedNumber = fixNumber(number);
  const message = encodeURIComponent(
    "Hola, me comunico porque encontré a tu mamá."
  );

  const url = `https://wa.me/${fixedNumber}?text=${message}`;

  handleWindow(url);
};
