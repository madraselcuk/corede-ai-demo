import { Language } from "../../enums";

/**
 * Base translation means that only english and turkish translations are mandatory, others are optional.
 * This is might be used for core project since language restriction for core projects are generally english and/or turkish
 */
export interface IBaseTranslation {
  [Language.en]: string;
  [Language.tr]: string;
  [Language.de]?: string;
  [Language.es]?: string;
  [Language.fr]?: string;
  [Language.it]?: string;
  [Language.pt]?: string;
  [Language.ru]?: string;
}

export interface ITranslation {
  [Language.en]: string;
  [Language.tr]: string;
  [Language.de]: string;
  [Language.es]: string;
  [Language.fr]: string;
  [Language.it]: string;
  [Language.pt]: string;
  [Language.ru]: string;
}

export interface IOptionalTranslation extends Partial<ITranslation> {}
