const EXPIRATION_SECONDS = 14400; // 2 Hours

export function localStorageTimer() {
  if (typeof window === "undefined") {
    return;
  }

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
  if (typeof window === "undefined") {
    return;
  }
  
  localStorage.setItem("lastUpdated", JSON.stringify(new Date()));
}