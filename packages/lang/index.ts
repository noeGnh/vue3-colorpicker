import enUS from "./en-US";
import zhCn from "./zh-CN";
import frFR from "./fr-FR";

export type Lang = "zh-cn" | "en" | "fr";

export const Local: { [K in Lang]: { [key: string]: string } } = {
  en: enUS,
  fr: frFR,
  "zh-cn": zhCn,
};
