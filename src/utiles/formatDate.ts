

// export const formatDate = (dateString: string): string => {
//   const utcDate = new Date(dateString); // 入力日付をUTCで扱う
//   const jstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000); // UTCから日本時間に変換

//   // 曜日の配列
//   const dayNames = ["日", "月", "火", "水", "木", "金", "土"];

//   // 年、月、日、曜日を取得
//   const year = jstDate.getFullYear();
//   const month = (jstDate.getMonth() + 1).toString().padStart(2, "0"); // 月を2桁でフォーマット
//   const day = jstDate.getDate().toString().padStart(2, "0"); // 日を2桁でフォーマット
//   const weekDay = dayNames[jstDate.getDay()]; // 曜日を取得

//   // フォーマットされた日付を返す
//   return `${year}-${month}-${day}(${weekDay})`;
// };



export const formatDate = (dateString: string): string => {
  const utcDate = new Date(dateString); // 入力日付をUTCで扱う
  const jstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000); // UTCから日本時間に変換

  // 曜日の配列
  const dayNames = ["日", "月", "火", "水", "木", "金", "土"];

  // 年、月、日、曜日を取得
  const year = jstDate.getFullYear();
  const month = (jstDate.getMonth() + 1).toString().padStart(2, "0"); // 月を2桁でフォーマット
  const day = jstDate.getDate().toString().padStart(2, "0"); // 日を2桁でフォーマット
  const weekDay = dayNames[jstDate.getDay()]; // 曜日を取得

  // フォーマットされた日付を返す
  return `${year}-${month}-${day}(${weekDay})`;
};

    