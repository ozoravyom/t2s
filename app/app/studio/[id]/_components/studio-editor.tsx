"use client"

import * as React from "react"
import TextareaAutosize from "react-textarea-autosize"
import { Mic, User, PanelRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CollapsibleTrigger } from "@/components/ui/collapsible"

export function StudioEditor() {
  return (
    <section 
      className="flex flex-1 flex-col p-4" 
      aria-label="Editor"
    >
      <Tabs defaultValue="text" className="flex h-full flex-col">
        <div className="flex items-center justify-between">
          <TabsList className="w-fit">
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="composer">Composer</TabsTrigger>
          </TabsList>
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
            >
              <PanelRight />
            </Button>
          </CollapsibleTrigger>
        </div>

        <TabsContent value="text" className="flex flex-1 flex-col outline-none">
          <InputGroup className="flex-1">
            <InputGroupTextarea
              id="textarea-text"
              placeholder="console.log('Hello, world!');"
              className="h-full min-h-0 flex-1"
            />
            <InputGroupAddon align="block-start" className="border-b">
              <InputGroupButton variant="outline" size="sm">
                <User />
                Speaker 1 - Zephyr
              </InputGroupButton>
              <InputGroupButton variant="outline" size="icon-sm" className="ml-auto">
                <Mic />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </TabsContent>

        <TabsContent value="composer" className="flex flex-1 flex-col outline-none">
          <InputGroup className="items-start">
            <TextareaAutosize
              id="textarea-composer"
              data-slot="input-group-control"
              placeholder="console.log('Hello, world!');"
              minRows={3}
              className={cn(
                "flex w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
                "resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent"
              )}
            />
            <InputGroupAddon align="block-start" className="border-b">
              <InputGroupButton variant="outline" size="sm">
                <User />
                Speaker 1 - Zephyr
              </InputGroupButton>
              <InputGroupButton variant="outline" size="icon-sm" className="ml-auto">
                <Mic />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </TabsContent>
      </Tabs>
    </section>
  )
}
