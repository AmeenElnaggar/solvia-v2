import Aura from '@primeuix/themes/aura';

export const CustomAura = {
  ...Aura,
  components: {
    ...Aura.components,

    dataview: {
      root: {
        background: 'none',
        borderColor: 'transparent',
      },
      content: {
        background: 'none',
        borderColor: 'transparent',
      },
      header: {
        background: 'none',
        borderColor: 'transparent',
      },
      footer: {
        background: 'none',
        borderColor: 'transparent',
      },
    },

    dialog: {
      root: {
        background: 'none',
        borderColor: 'none',
        color: 'none',
        shadow: 'none',
      },
    },

    slider: {
      ...Aura.components?.slider,
      range: {
        background: 'var(--accent-color)',
      },
    },

    select: {
      root: {
        background: '#ffffff',
        color: '#000000',
        placeholderColor: '#6b7280',
        borderColor: '#e5e7eb',
        hoverBorderColor: 'var(--primary-color)',
        focusBorderColor: 'var(--accent-color)',
        invalidBorderColor: '#ef4444',
        paddingX: '0.75rem',
        paddingY: '0.65rem',
        borderRadius: '4px',
        transitionDuration: '0.2s',
      },
      overlay: {
        background: '#ffffff',
        color: '#000000',
        borderColor: '#e5e7eb',
        borderRadius: '4px',
      },
      option: {
        color: '#000000',
        focusColor: '#000000',
        selectedColor: '#000000',
        selectedFocusColor: '#000000',
        background: '#ffffff',
        focusBackground: '#f3f4f6',
        selectedBackground: '#e5e7eb',
        selectedFocusBackground: '#d1d5db',
        padding: '0.5rem',
        borderRadius: '4px',
      },
      dropdown: {
        color: '#000000',
      },
    },

    drawer: {
      root: {
        background: 'var(--primary-color)',
        borderColor: 'transparent',
        color: '#fff',
        shadow: '0 4px 20px rgba(0,0,0,0.2)',
      },
      content: {
        padding: '1rem',
      },
      footer: {
        padding: '1rem',
      },
    },
  },
};
