import Link from "next/link"
import React from "react"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export interface BreadcrumbPath {
  label: string
  href: string
  /** 
   * 'always' - Visible on all screens
   * 'tablet' - Visible on tablet and desktop
   * 'desktop' - Visible only on desktop
   */
  visibility?: 'always' | 'tablet' | 'desktop'
}

interface AppBreadcrumbProps {
  paths: BreadcrumbPath[]
  currentLabel: string
}

export function AppBreadcrumb({ paths, currentLabel }: AppBreadcrumbProps) {
  const getVisibilityClass = (visibility?: string) => {
    switch (visibility) {
      case 'always': return ""
      case 'tablet': return "hidden sm:block"
      case 'desktop': return "hidden md:block"
      default: return "hidden"
    }
  }

  const getEllipsisVisibilityClass = () => {
    if (paths.length === 0) return "hidden"
    
    const hasHiddenOnDesktop = paths.some(p => !p.visibility)
    const hasHiddenOnTablet = paths.some(p => !p.visibility || p.visibility === 'desktop')
    const hasHiddenOnMobile = paths.some(p => p.visibility !== 'always')

    let classes = "flex"
    if (!hasHiddenOnMobile) classes += " hidden"
    if (!hasHiddenOnTablet) classes += " sm:hidden"
    if (!hasHiddenOnDesktop) classes += " md:hidden"
    
    return classes
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Render visible path segments */}
        {paths.map((path) => (
          <React.Fragment key={path.href}>
            <BreadcrumbItem className={getVisibilityClass(path.visibility)}>
              <BreadcrumbLink asChild>
                <Link href={path.href}>{path.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className={getVisibilityClass(path.visibility)} />
          </React.Fragment>
        ))}

        {/* Dropdown Ellipsis matching user's demo exactly */}
        {paths.length > 0 && (
          <>
            <BreadcrumbItem className={getEllipsisVisibilityClass()}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon-sm" variant="ghost">
                    <BreadcrumbEllipsis />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuGroup>
                    {paths.map((item) => (
                      <DropdownMenuItem 
                        key={item.href} 
                        asChild
                        className={
                          item.visibility === 'always' 
                            ? "hidden" 
                            : item.visibility === 'tablet' 
                              ? "sm:hidden" 
                              : item.visibility === 'desktop' 
                                ? "md:hidden" 
                                : ""
                        }
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator className={getEllipsisVisibilityClass()} />
          </>
        )}

        {/* Current Active Page */}
        <BreadcrumbItem>
          <BreadcrumbPage>{currentLabel}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
