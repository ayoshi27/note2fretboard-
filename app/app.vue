<script setup lang="ts">
import {
  SOUND_ON_GUITAR_STRING,
  type Sound,
  type GuitarString,
  getSoundNotation,
} from "./const";

type TargetStringOption = GuitarString | "all";
const selectedTargetGuitarString = ref<TargetStringOption>("all");
const selectedTargetFretStart = ref<number>(0);
const selectedTargetFretEnd = ref<number>(12);

const note = ref<Sound["note"]>("");
const guitarString = ref<GuitarString>(6);
const answer = ref<number | null>(null);

const startLesson = () => {
  guitarString.value =
    selectedTargetGuitarString.value === "all"
      ? ((Math.floor(Math.random() * 6) + 1) as GuitarString)
      : selectedTargetGuitarString.value;
  const notes = SOUND_ON_GUITAR_STRING[guitarString.value];

  const minSelected = Math.min(
    selectedTargetFretStart.value,
    selectedTargetFretEnd.value
  );

  const maxSelected = Math.max(
    selectedTargetFretStart.value,
    selectedTargetFretEnd.value
  );

  const clampedStart = Math.min(Math.max(minSelected, 0), notes.length - 1);
  const clampedEnd = Math.min(Math.max(maxSelected, 0), notes.length - 1);
  const rangeStart = Math.min(clampedStart, clampedEnd);
  const rangeEnd = Math.max(clampedStart, clampedEnd);

  const fret =
    Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;

  const answerNote = notes[fret];
  note.value = getSoundNotation(answerNote);
  answer.value = fret;
};

const questionText = computed(() => {
  if (!note.value) return "Let's get started!";
  return `Where is ${note.value} on ${guitarString.value} string?`;
});

const answerText = computed(() => {
  if (answer.value === null) return "";
  return answer.value === 0 ? "Open string" : `${answer.value} fret`;
});

const buttonLabel = computed(() => {
  return note.value ? "Next" : "Start";
});
</script>

<template>
  <div class="app-container">
    <div class="settings">
      <fieldset>
        <legend>String:</legend>
        <select v-model="selectedTargetGuitarString">
          <option value="all">All Strings</option>
          <option v-for="n in 6" :key="n" :value="n">{{ n }}</option>
        </select>
      </fieldset>
      <fieldset class="target-fret-range">
        <legend>Target Fret</legend>
        <select v-model="selectedTargetFretStart">
          <option v-for="n in 15" :key="n" :value="n - 1">{{ n - 1 }}</option>
        </select>
        <span>to</span>
        <select v-model="selectedTargetFretEnd">
          <option v-for="n in 15" :key="n" :value="n - 1">{{ n - 1 }}</option>
        </select>
      </fieldset>
    </div>

    <section class="question-section">
      <div class="question-text">{{ questionText }}</div>
      <button type="button" class="start-button" @click="startLesson">
        {{ buttonLabel }}
      </button>
    </section>

    <div>{{ answerText }}</div>
  </div>
</template>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.settings {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.question-section {
  height: calc(100% - 250px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

.target-fret-range {
  display: flex;
  align-items: center;
  gap: 8px;
}

.question-text {
  font-size: 26px;
  font-weight: bold;
}

.start-button {
  font-size: 24px;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
}

select {
  width: 135px;
  font-size: 16px;
  padding: 4px 8px;
}
</style>
