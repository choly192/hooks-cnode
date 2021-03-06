import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

export const fromNowDate = (date?: string): string => {
  if (!date) return "";
  return dayjs(date).fromNow();
};
