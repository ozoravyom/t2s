import { Button } from "@/components/ui/button"

export function StudioControls() {
  return (
    <section 
      className="border-t p-4" 
      aria-label="Controls"
    >
      <div className="flex flex-col gap-4">
        {/* Tempat untuk Audio Player nanti */}
        <div className="flex justify-end">
          <Button>Generate</Button>
        </div>
      </div>
    </section>
  )
}
