import { ComputedRef } from "vue";

export interface ColorPickerProvider {
  lang: ComputedRef<{ [key: string]: string }>;
}

export const ColorPickerProviderKey = "Vue3ColorPickerProvider";
