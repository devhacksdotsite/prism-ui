import type { PrimeVuePTOptions } from 'primevue/config'

const preset: PrimeVuePTOptions = {
  button: {
    root: {
      class: [
        'inline-flex items-center justify-center gap-2',
        'px-4 py-2 rounded-lg font-semibold text-sm',
        'transition-all duration-200 cursor-pointer',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'bg-pink text-white hover:brightness-110 active:scale-95',
      ],
    },
    label: { class: 'font-semibold' },
    icon: { class: 'text-base' },
  },
  inputtext: {
    root: {
      class: [
        'w-full px-3 py-2 rounded-lg border-2 border-surface-2 bg-surface-0 text-text',
        'transition-all duration-200',
        'placeholder:text-text-muted',
        'focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20',
        'disabled:opacity-50 disabled:cursor-not-allowed',
      ],
    },
  },
  textarea: {
    root: {
      class: [
        'w-full px-3 py-2 rounded-lg border-2 border-surface-2 bg-surface-0 text-text',
        'transition-all duration-200',
        'placeholder:text-text-muted',
        'focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'resize-y',
      ],
    },
  },
  select: {
    root: {
      class: [
        'inline-flex items-center w-full rounded-lg border-2 border-surface-2 bg-surface-0',
        'transition-all duration-200 cursor-pointer',
        'focus-within:border-purple focus-within:ring-2 focus-within:ring-purple/20',
      ],
    },
    label: { class: 'px-3 py-2 text-text flex-1' },
    dropdown: { class: 'px-2 text-text-muted' },
    listContainer: { class: 'max-h-60 overflow-auto' },
    list: { class: 'py-1' },
    option: {
      class: [
        'px-3 py-2 text-text cursor-pointer transition-colors',
        'hover:bg-purple/10',
        'data-[p-selected=true]:bg-purple/20 data-[p-selected=true]:text-purple',
        'data-[p-focused=true]:bg-purple/10',
      ],
    },
    overlay: {
      class: 'bg-surface-0 border-2 border-surface-2 rounded-lg shadow-lg mt-1',
    },
  },
  checkbox: {
    root: { class: 'inline-flex items-center gap-2 cursor-pointer' },
    input: {
      class: [
        'w-5 h-5 rounded border-2 border-surface-2 transition-all duration-200 cursor-pointer appearance-none',
        'checked:bg-pink checked:border-pink',
        'focus:outline-none focus:ring-2 focus:ring-pink/20',
      ],
    },
    icon: { class: 'text-white text-xs absolute' },
  },
  radiobutton: {
    root: { class: 'inline-flex items-center gap-2 cursor-pointer' },
    input: {
      class: [
        'w-5 h-5 rounded-full border-2 border-surface-2 transition-all duration-200 cursor-pointer appearance-none',
        'checked:border-purple checked:bg-purple',
        'focus:outline-none focus:ring-2 focus:ring-purple/20',
      ],
    },
    icon: { class: 'text-white' },
  },
  toggleswitch: {
    root: { class: 'inline-flex items-center cursor-pointer' },
    slider: {
      class: [
        'w-10 h-6 rounded-full transition-all duration-200 relative',
        'bg-surface-2',
        'before:absolute before:top-1 before:left-1 before:w-4 before:h-4 before:rounded-full before:bg-white before:transition-transform before:duration-200',
        'peer-checked:bg-mint peer-checked:before:translate-x-4',
      ],
    },
  },
  badge: {
    root: {
      class: [
        'inline-flex items-center justify-center',
        'px-2 py-0.5 rounded-full text-xs font-semibold',
        'bg-lilac text-white',
      ],
    },
  },
  tag: {
    root: {
      class: [
        'inline-flex items-center gap-1',
        'px-3 py-1 rounded-full text-xs font-semibold',
        'bg-purple/15 text-purple',
      ],
    },
    icon: { class: 'text-xs' },
  },
  card: {
    root: {
      class: [
        'rounded-xl border-2 border-surface-2 bg-surface-1 overflow-hidden',
        'transition-all duration-200',
        'hover:shadow-lg hover:border-purple/30 hover:-translate-y-0.5',
      ],
    },
    header: { class: 'p-0' },
    body: { class: 'p-5' },
    title: { class: 'text-lg font-bold text-text mb-1' },
    subtitle: { class: 'text-sm text-text-muted mb-3' },
    content: { class: 'text-text' },
    footer: { class: 'px-5 py-3 border-t border-surface-2' },
  },
  dialog: {
    root: { class: 'fixed inset-0 z-50 flex items-center justify-center' },
    mask: { class: 'fixed inset-0 bg-text/30 backdrop-blur-sm' },
    content: {
      class: [
        'relative bg-surface-0 rounded-2xl shadow-2xl border-2 border-surface-2',
        'max-w-lg w-full mx-4 max-h-[90vh] overflow-auto',
      ],
    },
    header: { class: 'flex items-center justify-between p-5 border-b border-surface-2' },
    title: { class: 'text-lg font-bold text-text' },
    headerActions: { class: 'flex items-center' },
    footer: { class: 'p-5 border-t border-surface-2 flex justify-end gap-2' },
  },
  toast: {
    root: { class: 'fixed top-4 right-4 z-50 flex flex-col gap-2 w-80' },
    message: {
      class: [
        'rounded-xl border-2 p-4 shadow-lg bg-surface-0',
        'flex items-start gap-3',
      ],
    },
    messageContent: { class: 'flex-1' },
    summary: { class: 'font-semibold text-text text-sm' },
    detail: { class: 'text-text-muted text-sm mt-1' },
    closeButton: { class: 'text-text-muted hover:text-coral cursor-pointer' },
  },
}

export default preset
