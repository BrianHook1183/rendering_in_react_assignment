import React from "react";
import Banner from "./Components/Banner";
import Hobbies from "./Components/Hobbies";
import Schedule from "./Components/Schedule";


/* 
Specific Instructions
Create additional components that are then used by the App component.
Do not assume anything about the list lengths. Your app should accommodate different values for the variables (name, birthday, imageSrc, hobbies, dailyActivities)
If the hobbies list is empty, you should display nothing for hobbies.
If the dailyActivities list is empty, you should display nothing for the schedule.
Style the components using inline styling and/or CSS files. It does not need to match the appearance of the example image, but should have a reasonable layout.

Functionality:
Image is displayed
Name & birthday are displayed
Hobbies are displayed in a list labeled "Hobbies"
"Hobbies" does not appear when hobbies list is empty
Schedule is displayed in a list

Styling:
Image size is appropriate
Layout is arranged reasonably

React Code Organization:
Uses at least 2 additional components
Each component is in its own file
App component is just a wrapper for the other components
Data needed for the components is passed through props

Code Style:
Code follows Prettier style convention
*/

const name = "Kitty Kat";
const birthday = "January 1";
const imageSrc =
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg";
const hobbies = ["watching birds", "hiding in a box", "napping"];
const dailyActivities = [
  { time: "8:00 am", description: "wake up" },
  { time: "8:30 am", description: "breakfast" },
  { time: "9:00 am", description: "morning nap" },
  { time: "12:00 pm", description: "lunch" },
  { time: "1:00 pm", description: "afternoon nap" },
  { time: "6:00 pm", description: "dinner" },
  { time: "7:00 pm", description: "play" },
  { time: "10:00 pm", description: "bedtime" },
];

function App() {
  return (
    <div>
      <Banner imageSrc={imageSrc} name={name} birthday={birthday}/>
      <Hobbies hobbies={hobbies} />
      <Schedule schedule={dailyActivities} />
    </div>
  );
}

export default App;
