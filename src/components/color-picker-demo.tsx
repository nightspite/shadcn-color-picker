'use client';

import { useState } from 'react';
import { ColorPicker } from './ui/color-picker';
import { Button } from './ui/button';

export const ColorPickerDemo = () => {
  const [color, setColor] = useState('#0f0f0f');

  return (
    <div
      className='flex flex-col justify-center items-center min-h-[100dvh] space-y-4'
      style={{
        backgroundColor: color,
      }}
    >
      <h1 className='text-white text-xl font-semibold'>shadcn-color-picker</h1>
      <div className='px-12 py-6 bg-white flex flex-col items-center gap-4 rounded-sm'>
        <h2>Color picker</h2>
        <ColorPicker
          onChange={(v) => {
            setColor(v as string);
          }}
          value={color}
        />

        <h2>Disabled</h2>
        <ColorPicker
          disabled
          onChange={(v) => {
            setColor(v as string);
          }}
          value={color}
        />

        <a
          href='https://github.com/nightspite/shadcn-color-picker/blob/master/src/components/ui/color-picker.tsx'
          className='block'
        >
          <Button>View code</Button>
        </a>
      </div>
    </div>
  );
};
