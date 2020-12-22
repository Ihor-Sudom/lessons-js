
export const squaredNumbers = () => {
  const liElem = document.querySelectorAll('.number');
  [...liElem].map((el) => {
    const num = el.dataset.number;
    el.dataset.squaredNumber = num * num;
  });
}
