import { CollapsibleContent } from "@/components/ui/collapsible"

export function StudioSidebar() {
  return (
    <CollapsibleContent 
      className="hidden h-full border-l lg:data-[state=open]:block"
    >
      <aside 
        className="w-80 h-full overflow-y-auto" 
        aria-label="Project settings"
      >
        {/* Konten akan ditambahkan di sini nanti */}
      </aside>
    </CollapsibleContent>
  )
}
