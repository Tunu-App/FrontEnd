export function checkTime() {
  let date = new Date();
  let currTime = date.getHours();

  if (currTime > 20) {
    return true;
  } else {
    return false;
  }
}
