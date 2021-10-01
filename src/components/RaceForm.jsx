import React from "react";

const RaceForm = (props) => {
  return (
    <form id="race-form" class="w-full my-3">
      <label class="pt-1 w-full" for="name">
        Racer:
      </label>
      <input
        class="p-2 bg-gray-600 rounded-lg race w-full"
        type="text"
        id="name"
        placeholder="Name (Ex: John Doe)"
      />
      <label class="pt-1 w-full" for="team">
        Team:
      </label>
      <select
        class="p-2 bg-gray-600 rounded-lg race w-full"
        type="text"
        id="team"
        placeholder="Team (Ex: Blue)"
      >
        <option value=""></option>
        <option value="Redbull">Redbull</option>
        <option value="McLaren">McLaren</option>
        <option value="Williams">Williams</option>
        <option value="N/A">N/A</option>
      </select>
      <label class="pt-1 w-full" for="time">
        Total Time:
      </label>
      <input
        class="p-2 bg-gray-600 rounded-lg race w-full"
        type="number"
        id="time"
        placeholder="Time(minutes) (Ex: 125)"
      />
      <label class="pt-1 w-full" for="laps">
        Number of Laps:
      </label>
      <input
        class="p-2 bg-gray-600 rounded-lg race w-full"
        type="number"
        id="laps"
        placeholder="Time (Ex: 23)"
      />
      <label class="pt-2 w-full" for="fastest">
        Fastest Lap:
      </label>
      <input
        class="p-2 bg-gray-600 rounded-lg race w-full"
        type="number"
        id="fastest"
        placeholder="Time(seconds) (Ex: 105.63)"
      />
      <label class="pt-2 w-full" for="comments">
        Additional Comments:
      </label>
      <textarea
        class="p-2 w-full bg-gray-600 rounded-lg"
        id="comments"
        placeholder="Additional Comments"
      >
        None
      </textarea>
      <button
        class="
            rounded-xl
            hover:bg-gray-700
            bg-gray-600
            py-2
            px-5
            float-right
            mt-5"
        id="submit-button"
        onClick={props.submit}
      >
        Submit
      </button>
    </form>
  );
};

export default RaceForm;
