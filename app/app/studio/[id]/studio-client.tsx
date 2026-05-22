"use client"

import { Collapsible } from "@/components/ui/collapsible"
import { StudioEditor } from "./_components/studio-editor"
import { StudioControls } from "./_components/studio-controls"
import { StudioSidebar } from "./_components/studio-sidebar"

export function StudioClient() {
  return (
    <Collapsible defaultOpen className="flex flex-1 overflow-hidden">
      <div className="flex flex-1 flex-col overflow-hidden">
        <StudioEditor />
        <StudioControls />
      </div>
      <StudioSidebar />
    </Collapsible>
  )
}
