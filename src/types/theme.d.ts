/* eslint-disable @typescript-eslint/no-empty-interface */
import { Palette, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        link: Palette['primary'];
    }

    interface PaletteOptions {
        link?: PaletteOptions['primary'];
    }
}
