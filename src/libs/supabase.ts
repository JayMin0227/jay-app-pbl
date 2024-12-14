// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL as string,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
// );

// export default supabase;


import { createClient } from "@supabase/supabase-js";

// 環境変数が未定義の場合にエラーをスロー
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Supabase URL and Anon Key must be defined in the environment variables.");
}

// 環境変数が正しく定義されている場合に Supabase クライアントを作成
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default supabase;
