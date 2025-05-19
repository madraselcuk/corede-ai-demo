import { Input } from "@/components/ui/co/input"
import { forwardRef, useState } from "react"
import { TranslatableTextInputProps } from "./translatable-text-input.props"
import { translatableTextInputDefaultProps } from "./translatable-text-input.props.default"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/co/dropdown-menu"
import { Language } from '@common_package'
import { i18n } from "@/localization"
import { cn } from "@/utils/css-class-name.utility"

export const TranslatableTextInput = forwardRef<
  HTMLInputElement,
  TranslatableTextInputProps
>(
  (
    {
      value = {},
      onChange,
      supportedLanguages = translatableTextInputDefaultProps.supportedLanguages,
      ...props
    },
    ref
  ) => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
      null
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!selectedLanguage) return

      const newValue = e.target.value.trim()
      const newTranslation = { ...value }

      if (newValue) {
        newTranslation[selectedLanguage] = e.target.value
      } else {
        delete newTranslation[selectedLanguage]
      }

      onChange?.(newTranslation)
    }

    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="bg-background rounded-md border px-3 py-1.5 hover:bg-accent"
              >
                {selectedLanguage
                  ? selectedLanguage.toUpperCase()
                  : i18n.t("common:selectLanguage")}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              {(supportedLanguages ?? []).map((lang: Language) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={cn(
                    "flex items-center gap-2",
                    selectedLanguage === lang && "bg-accent"
                  )}
                >
                  {lang.toUpperCase()}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Input
            ref={ref}
            {...props}
            value={selectedLanguage ? value[selectedLanguage] || "" : ""}
            onChange={handleChange}
            disabled={!selectedLanguage}
            placeholder={
              selectedLanguage
                ? i18n.t("common:enterTranslation", {
                  language: selectedLanguage.toUpperCase()
                })
                : i18n.t("common:selectLanguageFirst")
            }
          />
        </div>
      </div>
    )
  }
)

TranslatableTextInput.displayName = "InputTranslatableText"
