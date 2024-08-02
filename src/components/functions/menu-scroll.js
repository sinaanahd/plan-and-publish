function handleScroll(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    setTimeout(() => {
      handleScroll(id);
    }, 100);
  }
}
export default handleScroll;
