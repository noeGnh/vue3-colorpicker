import enUS from "./en-US";
import zhCn from "./zh-CN";
import frFR from "./fr-FR";

export type Lang = "ZH-cn" | "En" | "Fr";

export const Local: { [K in Lang]: { [key: string]: string } } = {
  En: enUS,
  Fr: frFR,
  "ZH-cn": zhCn,
};
