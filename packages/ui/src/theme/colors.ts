export const colors = {
    // Primary - Electric Blue (năng lượng, hiện đại, giống VinFast)
    primary: {
        50: '#E0F2FE',
        100: '#BAE6FD',
        200: '#7DD3FC',
        300: '#38BDF8',
        400: '#0EA5E9',
        500: '#0284C8',   // Màu chính - Electric Blue
        600: '#0369A1',
        700: '#075985',
        800: '#0C4A6E',
        900: '#082F4E',
    },

    // Accent - Neon Green (sạc nhanh, đổi pin, năng lượng xanh)
    accent: {
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',   // Màu chính - Charging Green
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D',
    },

    // Status colors
    status: {
        available: '#22C55E',     // Rảnh - xanh lá
        busy: '#F59E0B',          // Đang bận - vàng cam
        maintenance: '#EF4444',   // Bảo trì - đỏ
        offline: '#6B7280',       // Ngoại tuyến - xám
        charging: '#0EA5E9',      // Đang sạc - xanh dương
    },

    // Neutral colors (nền, text)
    neutral: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E2937',
        900: '#0F172A',
        950: '#020617',           // Dark background
    },

    // Semantic colors
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#0EA5E9',

    // Background
    background: {
        light: '#F8FAFC',
        dark: '#0F172A',
    },

    // Text
    text: {
        primary: '#0F172A',
        secondary: '#475569',
        light: '#F1F5F9',
    },

    // Special cho EV
    battery: {
        low: '#EF4444',
        medium: '#F59E0B',
        high: '#22C55E',
        full: '#15803D',
    },
} as const;

// Export kiểu để dùng TypeScript
export type Colors = typeof colors;
export type ColorKey = keyof Colors;