"use strict"
//variables store the user's current choices.
let mood ="";
let energy ="";
let availableTime ="";

//allow users to select an option in each group.
 function setupOptions(groupId, updateChoice) {
  const buttons = document.querySelectorAll(
    `#${groupId} button`
  );

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      buttons.forEach(function(item) {
        item.classList.remove("selected");
      });

      button.classList.add("selected");
      updateChoice(button.dataset.value);
    });
  });
}

setupOptions("moodOptions", function(value) {
  mood = value;
});

setupOptions("energyOptions", function(value) {
  energy = value;
});

setupOptions("timeOptions", function(value) {
  availableTime = value;
});
// Conditional statements choose a personalized outcome.
function makeDecision() {
  if (!mood || !energy || !availableTime) {
    alert("Please select an answer for all three questions!");
    return;
  }
  let title = "";
  let description = "";
  let tip = "";
  let emoji = "";
 if (energy === "low" || mood === "tired") {
    emoji = "🌿";
    title = "Your Reset Day";
    description =
    "Take a gentle walk, stretch, or enjoy a quiet break. " +
      "You don't need to be productive every minute.";
    tip = `Your plan: ${availableTime} minutes of intentional rest.`;
  } else if (mood === "stressed") {
    emoji = "🧘";
    title = "Your Calm Moment";
    description =
      "Put your phone away, take some slow breaths, " +
      "and tackle just one thing at a time.";
    tip = `Your plan: ${availableTime} minutes to reset your mind.`;
    } else if (mood === "bored" && energy === "high") {
    emoji = "🎨";
    title = "Try Something New";
    description =
      "Learn a new skill, try a creative project, " +
      "or explore somewhere you've never visited.";
 tip = `Your plan: ${availableTime} minutes of something different.`;
 } else if (mood === "happy" && energy === "high") {
    emoji = "🚀";
    title = "Make It Happen";
    description =
      "Use your energy for a workout, a personal goal, " +
      "or that task you've been putting off.";
    tip = `Your plan: ${availableTime} minutes of focused action.`;

  } else {
    emoji = "☀️";
    title = "Your Balanced Day";
    description =
      "Listen to music, meet a friend, or finish a small " +
      "task before doing something you enjoy.";
    tip = `Your plan: ${availableTime} minutes for yourself.`;
  }

  document.getElementById("resultLabel").textContent =
    `${emoji} YOUR PERSONALIZED PLAN`;

  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultDescription").textContent =
    description;
  document.getElementById("resultTip").textContent = tip;

  const result = document.getElementById("result");
  result.hidden = false;

  result.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

// Display the recommendation when the user clicks.
document.getElementById("decide").addEventListener(
  "click",
  makeDecision
);

// Reset the state so the user can start again.
document.getElementById("reset").addEventListener("click", function() {
  mood = "";
  energy = "";
  availableTime = "";

  document.querySelectorAll(".options button").forEach(function(button) {
    button.classList.remove("selected");
  });

  document.getElementById("result").hidden = true;

  document.getElementById("moodOptions").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});
       