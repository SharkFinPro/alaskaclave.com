const EXPIRATION_SECONDS = 14400; // 2 Hours

export function localStorageTimer() {
  const lastUpdated = localStorage.getItem("lastUpdated");
  if (!lastUpdated) {
    localStorage.clear();
    return;
  }

  const diffTime = new Date(JSON.parse(lastUpdated));
  const diff = Math.abs(diffTime - new Date()) / 1000;
  if (diff > EXPIRATION_SECONDS) {
    localStorage.clear();
  }
}

export function timeStampLocalStorage() {
  localStorage.setItem("lastUpdated", JSON.stringify(new Date()));
}