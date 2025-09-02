import { ComputedRef } from "vue";

export type SupportLang = "ZH-cn" | "En" | "Fr";

export interface ColorPickerProvider {
  lang: ComputedRef<{ [key: string]: string }>;
}

export const ColorPickerProviderKey = "Vue3ColorPickerProvider";
