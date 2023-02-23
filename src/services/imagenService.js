import { obtenerMImagenes} from '../config/ImagenBD.js';

export const obtenerSImagenes = () => {
  try {
    const todoslasImagenes = obtenerMImagenes();
    return todoslasImagenes;
  } catch (error) {
    throw error;
  }
};
