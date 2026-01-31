fetch("http://localhost:3001/game/reward")
  .then(res => res.json())
  .then(data => {
    winReward = data.reward;
    console.log("Reward from server:", winReward);
  });

  
  let winReward = "";

fetch("http://localhost:3001/game/reward")
  .then(res => res.json())
  .then(data => {
    winReward = data.reward;
    console.log("Reward loaded:", winReward);

    startGame(); // ✅ ՄԻԱՅՆ ՀԻՄԱ
  });

fetch("/api/admin/reward", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ reward: value })
});
