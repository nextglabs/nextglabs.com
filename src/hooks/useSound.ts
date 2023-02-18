import useSoundHook from "use-sound";
import { HookOptions } from "use-sound/dist/types";

export const useSound = (src = "assets/audio/menu-open-sound.mp3", options?: HookOptions) => useSoundHook(src, { volume: 0.2, ...options });
