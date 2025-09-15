 function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");

    // Create toast element
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    // Remove after animation
    setTimeout(() => {
      toast.remove();
    }, 4000); // 3s fade + 1s buffer
  }