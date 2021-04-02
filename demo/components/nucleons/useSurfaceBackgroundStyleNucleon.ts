import { useMemo } from 'react';
import { useColorRoles } from '../../state/colorSystem';

export default function useSurfaceBackgroundStyleNucleon() {
  const { surface } = useColorRoles();
  return useMemo(
    () => ({
      backgroundColor: surface.background
    }),
    [surface.background]
  );
}
