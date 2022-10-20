function swap(to) {
  document.querySelectorAll(".screenshot").forEach(c => c.classList.remove("visible"))
  document.getElementById("screenshot-"+to).classList.add("visible")
  return false;
}