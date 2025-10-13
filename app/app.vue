<script setup lang="ts">
import {
  SOUND_ON_GUITAR_STRING,
  type Sound,
  type GuitarString,
  getSoundNotation,
} from "./const";

type TargetStringOption = GuitarString | "all";
const selectedTargetGuitarString = ref<TargetStringOption>("all");

const note = ref<Sound["note"]>("");
const guitarString = ref<GuitarString>(6);
const answer = ref<number | null>(null);

const startLesson = () => {
  guitarString.value =
    selectedTargetGuitarString.value === "all"
      ? ((Math.floor(Math.random() * 6) + 1) as GuitarString)
      : selectedTargetGuitarString.value;
  const notes = SOUND_ON_GUITAR_STRING[guitarString.value];
  const answerNote = notes[Math.floor(Math.random() * notes.length)] as Sound;
  note.value = getSoundNotation(answerNote);

  answer.value = notes.findIndex(
    (n) =>
      n.note === answerNote.note &&
      n.octave === answerNote.octave &&
      n.symbol === answerNote.symbol
  );
};

const questionText = computed(() => {
  if (!note.value) return "Let's get started!";
  return `Where is ${note.value} on ${guitarString.value} string？`;
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
    <div>
      <label>
        Target Guitar String:
        <select v-model="selectedTargetGuitarString">
          <option v-for="n in 6" :key="n" :value="n">{{ n }}</option>
        </select>
      </label>
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

.question-section {
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

.question-text {
  font-size: 36px;
  font-weight: bold;
}

.start-button {
  font-size: 24px;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}

select {
  width: 60px;
  font-size: 16px;
  margin-left: 8px;
  padding: 4px 8px;
}
</style>
