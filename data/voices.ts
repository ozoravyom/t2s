export interface VoiceOption {
  value: string;
  label: string;
  personality: string;
}

/**
 * GEMINI_VOICES
 * Centralized list of all 30 natively supported output voices in Gemini 3.1 Speech Generation.
 * These voices support multilingual automatic detection.
 */
export const GEMINI_VOICES: VoiceOption[] = [
  { value: "Puck", label: "Puck", personality: "Upbeat" },
  { value: "Zephyr", label: "Zephyr", personality: "Bright" },
  { value: "Charon", label: "Charon", personality: "Informative" },
  { value: "Kore", label: "Kore", personality: "Firm" },
  { value: "Fenrir", label: "Fenrir", personality: "Excitable" },
  { value: "Leda", label: "Leda", personality: "Youthful" },
  { value: "Orus", label: "Orus", personality: "Firm" },
  { value: "Aoede", label: "Aoede", personality: "Breezy" },
  { value: "Callirrhoe", label: "Callirrhoe", personality: "Easy-going" },
  { value: "Autonoe", label: "Autonoe", personality: "Bright" },
  { value: "Enceladus", label: "Enceladus", personality: "Breathy" },
  { value: "Iapetus", label: "Iapetus", personality: "Clear" },
  { value: "Umbriel", label: "Umbriel", personality: "Easy-going" },
  { value: "Algieba", label: "Algieba", personality: "Smooth" },
  { value: "Despina", label: "Despina", personality: "Smooth" },
  { value: "Erinome", label: "Erinome", personality: "Clear" },
  { value: "Algenib", label: "Algenib", personality: "Gravelly" },
  { value: "Rasalgethi", label: "Rasalgethi", personality: "Informative" },
  { value: "Laomedeia", label: "Laomedeia", personality: "Upbeat" },
  { value: "Achernar", label: "Achernar", personality: "Soft" },
  { value: "Alnilam", label: "Alnilam", personality: "Firm" },
  { value: "Schedar", label: "Schedar", personality: "Even" },
  { value: "Gacrux", label: "Gacrux", personality: "Mature" },
  { value: "Pulcherrima", label: "Pulcherrima", personality: "Forward" },
  { value: "Achird", label: "Achird", personality: "Friendly" },
  { value: "Zubenelgenubi", label: "Zubenelgenubi", personality: "Casual" },
  { value: "Vindemiatrix", label: "Vindemiatrix", personality: "Gentle" },
  { value: "Sadachbia", label: "Sadachbia", personality: "Lively" },
  { value: "Sadaltager", label: "Sadaltager", personality: "Knowledgeable" },
  { value: "Sulafat", label: "Sulafat", personality: "Warm" },
];

export const DEFAULT_VOICE = "Puck";
