"use client"

import { createContext, useState, use, Dispatch, SetStateAction } from "react"

export interface Speaker {
  audioProfile: string
  style: string
  pace: string
  accent: string
  voice: string
}

export interface SpeechBlock {
  id: string
  text: string
  speaker: "Speaker 1" | "Speaker 2"
}

interface SpeakerState {
  model: string
  setModel: (val: string) => void
  scene: string
  setScene: (val: string) => void
  sampleContext: string
  setSampleContext: (val: string) => void
  
  speaker1: Speaker
  setSpeaker1: Dispatch<SetStateAction<Speaker>>
  speaker2: Speaker
  setSpeaker2: Dispatch<SetStateAction<Speaker>>
  
  blocks: SpeechBlock[]
  setBlocks: Dispatch<SetStateAction<SpeechBlock[]>>
  
  handleReset: () => void
}

const SpeakerContext = createContext<SpeakerState | null>(null)

/**
 * SpeakerProvider
 * A central React Context Provider managing studio state (Model, Scene, Sample Context,
 * Speaker Configurations, and active Composer Speech Blocks) to establish direct,
 * efficient, and reactive communication between the Sidebar and Editor Tabs.
 */
export function SpeakerProvider({ children }: { children: React.ReactNode }) {
  const [model, setModel] = useState("gemini-3.1-flash-tts-preview")
  const [scene, setScene] = useState("")
  const [sampleContext, setSampleContext] = useState("")

  const [speaker1, setSpeaker1] = useState<Speaker>({
    audioProfile: "",
    style: "",
    pace: "",
    accent: "",
    voice: "Zephyr", // Default voice for Speaker 1 as requested
  })

  const [speaker2, setSpeaker2] = useState<Speaker>({
    audioProfile: "",
    style: "",
    pace: "",
    accent: "",
    voice: "Puck", // Default voice for Speaker 2 as requested
  })

  const [blocks, setBlocks] = useState<SpeechBlock[]>([
    { id: "block-1", text: "", speaker: "Speaker 1" }
  ])

  const handleReset = () => {
    setModel("gemini-3.1-flash-tts-preview")
    setScene("")
    setSampleContext("")
    setSpeaker1({
      audioProfile: "",
      style: "",
      pace: "",
      accent: "",
      voice: "Zephyr",
    })
    setSpeaker2({
      audioProfile: "",
      style: "",
      pace: "",
      accent: "",
      voice: "Puck",
    })
    setBlocks([
      { id: "block-1", text: "", speaker: "Speaker 1" }
    ])
  }

  return (
    <SpeakerContext
      value={{
        model,
        setModel,
        scene,
        setScene,
        sampleContext,
        setSampleContext,
        speaker1,
        setSpeaker1,
        speaker2,
        setSpeaker2,
        blocks,
        setBlocks,
        handleReset,
      }}
    >
      {children}
    </SpeakerContext>
  )
}

/**
 * Custom Hook: useSpeaker
 * Provides access to the Speaker Context. Guarantees safety by checking for provider presence.
 */
export function useSpeaker() {
  const context = use(SpeakerContext)
  if (!context) {
    throw new Error("useSpeaker must be used within a SpeakerProvider")
  }
  return context
}
