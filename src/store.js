import { writable } from 'svelte/store'

// Future markupHeade broken up export

// export const markupIdStore = writable("");
// export const markupTitleStore = writable("");
// export const markupComposerStore = writable("");
// export const markupSourceStore = writable("");
// export const markupMeterStore = writable("");
// export const markupLengthStore = writable("");
// export const markupKeyStore = writable("");

// Markup;

// export const markupHeaderStore = writable('')
// export const markupNotesStore = writable('')
export const markupConsolidatedStore = writable('')

// let markupHeader = '' // Will be set updated by store
// let markupNotes = '' // Will be set updated by store
// let markup = '' // Will be set updated by store

// markupHeaderStore.subscribe(value => {
//   markupHeader = value
// })
// markupNotesStore.subscribe(value => {
//   markupNotes = value
// })
// markupConsolidatedStore.subscribe(value => {
//   markup = value
// })

// $: markupConsolidatedStore.set(markupHeader + markupNotes)
// $: console.log(markup)

// let markupId = "";
// let markupTitle = "";
// let markupComposer = "";
// let markupSource = "";
// let markupMeter = "";
// let markupLength = "";
// let markupKey = "";

// markupIdStore.subscribe(value => {
//   markupId = value;
// });
// markupTitleStore.subscribe(value => {
//   markupTitle = value;
// });
// markupComposerStore.subscribe(value => {
//   markupComposer = value;
// });
// markupSourceStore.subscribe(value => {
//   markupSource = value;
// });
// markupMeterStore.subscribe(value => {
//   markupMeter = value;
// });
// markupLengthStore.subscribe(value => {
//   markupLength = value;
// });
// markupKeyStore.subscribe(value => {
//   markupKey = value;
// });

// export const consolidateMarkupHeaderStore = () => {
//   markupHeaderStore.set(
//     `X: ${markupId}
// T: ${markupTitle}
// C: ${markupComposer}
// S: ${markupSource}
// M: ${markupMeter}
// L: ${markupLength}
// K: ${markupKey}\n`
//   );
// };
