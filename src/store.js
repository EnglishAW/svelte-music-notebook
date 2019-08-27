import { writable } from "svelte/store";

// Future markupHeade broken up export

export const markupIdStore = writable("");
export const markupTitleStore = writable("");
export const markupComposerStore = writable("");
export const markupSourceStore = writable("");
export const markupMeterStore = writable("");
export const markupLengthStore = writable("");
export const markupKeyStore = writable("");

// Markup;

export const markupHeaderStore = writable("");
export const markupNotesStore = writable("| |]");
export const markupConsolidatedStore = writable("");

let markupId = "";
let markupTitle = "";
let markupComposer = "";
let markupSource = "";
let markupMeter = "";
let markupLength = "";
let markupKey = "";

markupIdStore.subscribe(value => {
  markupId = value;
});
markupTitleStore.subscribe(value => {
  markupTitle = value;
});
markupComposerStore.subscribe(value => {
  markupComposer = value;
});
markupSourceStore.subscribe(value => {
  markupSource = value;
});
markupMeterStore.subscribe(value => {
  markupMeter = value;
});
markupLengthStore.subscribe(value => {
  markupLength = value;
});
markupKeyStore.subscribe(value => {
  markupKey = value;
});

export const consolidateMarkupHeaderStore = () => {
  markupHeaderStore.set(
    `X: ${markupId}
T: ${markupTitle}
C: ${markupComposer}
S: ${markupSource}
M: ${markupMeter}
L: ${markupLength}
K: ${markupKey}\n`
  );
};
