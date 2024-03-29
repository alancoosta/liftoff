import React from 'react';

import * as Atoms from '@components/atoms';
import type { Payload } from '@types';

import { ListItem } from '../listitem';

function LaunchPayload({ payload }: { payload: Payload }) {
  return (
    <Atoms.Card>
      <Atoms.Text
        variant="text-xs"
        sx={{
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Payload
      </Atoms.Text>

      <Atoms.Text
        variant="text-xs"
        sx={{
          color: 'primary',
          fontSize: 10,
          mt: '15px',
        }}
      >
        {!!payload.manufacturers.length ?? `${payload.customers[0]} - `}
        {payload.name}
      </Atoms.Text>

      <Atoms.Row sx={{ mt: '15px' }}>
        <Atoms.Badge sx={{ height: 15 }}>
          <Atoms.Text
            variant="text-xs"
            sx={{
              color: 'white',
              fontSize: 9,
              fontWeight: 500,
            }}
          >
            {payload.orbit}
          </Atoms.Text>
        </Atoms.Badge>

        <Atoms.Badge sx={{ height: 15, ml: '4px' }}>
          <Atoms.Text
            variant="text-xs"
            sx={{
              color: 'white',
              fontSize: 9,
              fontWeight: 500,
            }}
          >
            {payload.type}
          </Atoms.Text>
        </Atoms.Badge>

        {payload.mass_kg && (
          <Atoms.Badge sx={{ height: 15, ml: '4px' }}>
            <Atoms.Text
              variant="text-xs"
              sx={{
                color: 'white',
                fontSize: 9,
                fontWeight: 500,
              }}
            >
              {payload.mass_kg} kg
            </Atoms.Text>
          </Atoms.Badge>
        )}
      </Atoms.Row>

      <Atoms.Box>
        <ListItem title="Lifespan" value={payload.lifespan_years} />

        <ListItem
          title="Reference System"
          value={payload.reference_system}
          capitalize
        />

        <ListItem title="Regime" value={payload.regime} capitalize />

        <ListItem
          title="Apoapsis"
          value={payload.apoapsis_km ? `${payload.apoapsis_km} km` : '-'}
        />

        <ListItem
          title="Periapsis"
          value={payload.periapsis_km ? `${payload.periapsis_km} km` : '-'}
        />
      </Atoms.Box>
    </Atoms.Card>
  );
}

export { LaunchPayload };
