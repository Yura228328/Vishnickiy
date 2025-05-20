class PlayButton extends HTMLElement {
   static register(tagName) {
      if ("customElements" in window) {
         customElements.define(tagName || "play-button", PlayButton);
      }
   }

   connectedCallback() {
      this.addEventListener("click", (event) => {
         if (!this.player) return;
         this.player.paused ? this.player.play() : this.player.pause();
      });
   }

   get player() {
      return this.querySelector("audio, video");
   }

   get button() {
      return this.querySelector("button");
   }
   connectedCallback() {
      const player = this.player;
      if (player) {
         player.volume = 0.4; // Значение от 0.0 (тихо) до 1.0 (максимум)
      }

      this.addEventListener("click", (event) => {
         if (!player) return;
         player.paused ? player.play() : player.pause();
      });
   }
}

PlayButton.register();



const panels = document.querySelectorAll(".sisi");

panels.forEach((panel) => {
   panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
   });
});

function removeActiveClasses() {
   panels.forEach((panel) => {
      panel.classList.remove("active");
   });
}