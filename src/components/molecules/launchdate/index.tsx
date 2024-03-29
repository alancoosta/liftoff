import React from 'react';

import { format } from 'date-fns';

import * as Atoms from '@components/atoms';

function LaunchDate({
  date,
  showLocalTime,
}: {
  date: Date;
  showLocalTime?: boolean;
}) {
  return (
    <Atoms.Box>
      {showLocalTime ? (
        <Atoms.Box>
          <Atoms.Text
            variant="text-xs"
            sx={{ color: 'primary', fontSize: 9, fontWeight: 500 }}
          >
            {String(date).slice(11, 16)} Local
          </Atoms.Text>

          <Atoms.Text
            variant="text-xs"
            sx={{ color: 'primary', fontSize: 9, fontWeight: 500, mt: '3px' }}
          >
            {format(new Date(date), 'do MMM, iii HH:mm O')}
          </Atoms.Text>
        </Atoms.Box>
      ) : (
        <Atoms.Text
          variant="text-xs"
          sx={{ color: 'primary', fontSize: 9, fontWeight: 500 }}
        >
          {format(new Date(date), 'HH:mm O')}
        </Atoms.Text>
      )}
    </Atoms.Box>
  );
}

export { LaunchDate };
